import { Colors } from '@battis/qui-cli.colors';
import * as Plugin from '@battis/qui-cli.plugin';
import { Canvas } from '@groton/canvas-api.client.qui-cli';
import ora from 'ora';

export type Configuration = {
  user?: string[];
  all?: boolean;
  accountId?: string;
} & Plugin.Configuration;

export const name = 'favorites';

let user: string[] = [];
let all = false;
let accountId: string | undefined = undefined;

export function configure(config: Configuration = {}) {
  user = Plugin.hydrate(config.user, user);
  all = Plugin.hydrate(config.all, all);
  accountId = Plugin.hydrate(config.accountId, accountId);
}

export function options(): Plugin.Options {
  return {
    man: [
      {
        text: `Set user favorites to only courses in which they are not enrolled as an advisor and which end after the current date.`
      },
      { level: 1, text: 'Warning' },
      {
        text: 'This script will overwrite any existing favorite course settings for the affected users.'
      }
    ],
    optList: {
      user: {
        description: `User ID of individual Canvas users whose favories should be reset. May be set multiple times and may use sis_user_id or Canvas ID values`
      }
    },
    flag: {
      all: {
        description: `Reset favorites for all users enrolled in currently active courses (default: ${Colors.value(all)}, ${Colors.value('--accountId')} MUST be set)`
      }
    },
    opt: {
      accountId: {
        description: `Account ID in which to reset favorites of all users (ignored unless ${Colors.value('--all')} is set)`
      }
    }
  };
}

export function init({ values }: Plugin.ExpectedArguments<typeof options>) {
  configure(values);
}

export async function run() {
  const now = new Date();

  // build list of affected users
  let spinner = ora('Collecting user information').start();
  let users: Canvas.Users.User[] = [];
  if (all) {
    if (!accountId) {
      spinner.fail(
        `${Colors.value('--accountId')} must be set in order to reset all users`
      );
      throw new Error();
    }
    users = await Canvas.v1.Accounts.Users.list({
      pathParams: { account_id: accountId }
    });
  } else {
    for (const id of user) {
      users.push(
        await Canvas.v1.Users.show_user_details({ pathParams: { id } })
      );
    }
  }
  spinner.succeed(`${users.length} users`);

  for (const user of users) {
    spinner = ora(user.name).start();

    // build per-user list of distinct courses (including non-observer enrollment where there are duplicates)
    const courses = (
      await Canvas.v1.Users.Courses.list({
        pathParams: { user_id: user.id },
        searchParams: { include: ['term'] }
      })
    ).reduce((unique, course) => {
      const i = unique.findIndex((c) => c.id === course.id);
      if (i < 0) {
        unique.push(course);
      } else if (
        course.enrollments.find((enrollment) => enrollment.type !== 'observer')
      ) {
        unique[i] = course;
      }
      return unique;
    }, [] as Canvas.Courses.Course[]);

    // favorite all current non-observer enrollments
    const favorited: Canvas.Courses.Course[] = [];
    for (const course of courses) {
      if (
        course.enrollments.find(
          (enrollment) => enrollment.type !== 'observer'
        ) &&
        new Date(course.term.end_at) > now
      ) {
        await Canvas.v1.Users.Self.Favorites.Courses.add_course_to_favorites({
          pathParams: { id: course.id },
          searchParams: { as_user_id: user.id }
        });
        favorited.push(course);
        spinner.text = `${user.name} enrolled as ${course.enrollments[0].type} in ${course.name} (${course.term.name}), added to favorites.`;
      }
    }

    const favorites = await Canvas.v1.Users.Self.Favorites.Courses.list({
      searchParams: { as_user_id: user.id }
    });

    // remove all non-favorited courses from favorites
    for (const favorite of favorites) {
      if (!favorited.find((course) => course.id === favorite.id)) {
        await Canvas.v1.Users.Self.Favorites.Courses.remove_course_from_favorites(
          {
            pathParams: { id: favorite.id },
            searchParams: { as_user_id: user.id }
          }
        );
        spinner.text = `${user.name}'s enrollment in ${favorite.name} removed from favorites`;
      }
    }

    spinner.succeed(
      `${user.name} (${favorited.length}/${courses.length} favorites)`
    );
  }
}
