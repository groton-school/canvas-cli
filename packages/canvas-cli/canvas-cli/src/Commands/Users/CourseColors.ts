import { Colors } from '@battis/qui-cli.colors';
import * as Plugin from '@battis/qui-cli.plugin';
import { Canvas } from '@groton/canvas-cli.client.qui-cli';
import * as GrotonColors from '@groton/colors';
import ora from 'ora';

export type Configuration = Plugin.Configuration & {
  account_id?: string;
  term_id?: number;
  overwrite?: boolean;
};

export const name = 'course-colors';

let account_id: string | undefined = undefined;
let term_id: number | undefined = undefined;
let overwrite = false;

export function configure(config: Configuration = {}) {
  account_id = Plugin.hydrate(config.account_id, account_id);
  term_id = Plugin.hydrate(config.term_id, term_id);
  overwrite = Plugin.hydrate(config.overwrite, overwrite);
}

export function options(): Plugin.Options {
  return {
    flag: {
      overwrite: {
        description: 'Whether or not to overwrite existing colors',
        default: overwrite
      }
    },
    opt: {
      accountId: {
        description: `Canvas account ID to include`,
        default: '1'
      }
    },
    num: {
      termId: {
        description: `Canvas term ID to include`
      }
    }
  };
}

export function init(args: Plugin.ExpectedArguments<typeof options>) {
  const {
    values: { accountId: account_id, termId: term_id, ...values }
  } = args;
  configure({
    account_id,
    term_id: term_id as unknown as number,
    ...values
  });
}

export async function run() {
  if (!account_id) {
    throw new Error(`accountId must be defined`);
  }
  if (!term_id) {
    throw new Error(`termId must be defined`);
  }

  const colors = Object.keys(GrotonColors)
    .filter((key) => key.length === 2)
    .reduce(
      (colors, key) => {
        colors[key] = GrotonColors[key as keyof typeof GrotonColors];
        return colors;
      },
      {} as Record<string, string>
    );

  const colorCache: Record<
    Canvas.Enrollments.Enrollment['sis_section_id'],
    Canvas.v1.Users.Colors.updateFormParameters['hexcode']
  > = {};

  function blockFrom(course?: Canvas.Courses.Course) {
    let block: string | undefined = undefined;
    const blockMatches =
      course && /\(([A-Z]{1,2})[^)]*\)$/.exec(course.course_code);
    if (blockMatches && blockMatches.length >= 2) {
      block = blockMatches[1];
    }
    return block;
  }

  const per_page = 100;
  const courses = await await Canvas.v1.Accounts.Courses.list({
    pathParams: { account_id },
    searchParams: { enrollment_term_id: term_id, per_page }
  });

  function colorOf(enrollment: Canvas.Enrollments.Enrollment) {
    const course = courses.find(
      (course) => course.sis_course_id === enrollment.sis_section_id
    );
    if (course) {
      if (!(course.sis_course_id in colorCache)) {
        const block = blockFrom(course);
        if (block && block in colors) {
          colorCache[course.sis_course_id] = colors[block];
        }
      }
      return colorCache[course.sis_course_id];
    }
    return undefined;
  }

  for (const course of courses) {
    const spinner = ora(course.name).start();
    let applied = 0;
    const block = blockFrom(course);
    if (block && block in colors) {
      for (const enrollment of await Canvas.v1.Courses.Enrollments.list({
        pathParams: { course_id: course.id },
        searchParams: { per_page }
      })) {
        const hexcode = colorOf(enrollment);
        if (hexcode) {
          await Canvas.v1.Users.Colors.update({
            pathParams: {
              id: enrollment.user_id,
              asset_string: `course_${course.id}`
            },
            params: { hexcode }
          });
          applied++;
        }
      }

      if (applied > 0) {
        spinner.succeed(
          `${applied} users updated in ${course.name} ${Colors.url(`${Canvas.client().instance_url}/courses/${course.id}`)}`
        );
      }
    } else {
      spinner.fail(course.name);
    }
  }
}
