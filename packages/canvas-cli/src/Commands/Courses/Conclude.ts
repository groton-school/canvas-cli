import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import '@qui-cli/env';
import { Log } from '@qui-cli/log';
import * as Plugin from '@qui-cli/plugin';
import ora from 'ora';

export type Configuratuon = Plugin.Configuration & {
  account?: string;
  term?: string;
  all?: boolean;
};

let account_id = '1';
let term: string | undefined = undefined;
let all = false;

export function configure(config: Configuratuon = {}) {
  account_id = Plugin.hydrate(config.account, account_id);
  term = Plugin.hydrate(config.term, term);
  all = Plugin.hydrate(config.all, all);
}

export function options(): Plugin.Options {
  return {
    opt: {
      account: {
        description: `Canvas Account ID in which courses should be concluded (required)`,
        default: account_id
      },
      term: {
        description: `Canvas Term ID for the term in which courses should be concluded (required if ${Colors.value('--all')} is not set)`,
        default: term
      }
    },
    flag: {
      all: {
        description: `Conclude courses in all terms that have ended`,
        default: all
      }
    }
  };
}

export function init({ values }: Plugin.ExpectedArguments<typeof options>) {
  configure(values);
}

export async function run() {
  if (!account_id) {
    throw new Error(`${Colors.value('--account')} must have a value`);
  }

  const now = new Date();
  const terms: Canvas.EnrollmentTerms.EnrollmentTerm[] = [];
  if (all) {
    terms.push(
      ...(
        await Canvas.v1.Accounts.Terms.list({ pathParams: { account_id: 1 } })
      ).enrollment_terms.filter((term) => new Date(term.end_at) < now)
    );
  } else if (term) {
    terms.push(
      await Canvas.v1.Accounts.Terms.retrieve_enrollment_term({
        pathParams: { account_id: 1, id: term }
      })
    );
  } else {
    throw new Error(
      `${Colors.value('--term')} or ${Colors.value('--all')} must be defined`
    );
  }

  for (const term of terms) {
    const termSpinner = ora(
      `Processing available courses in term ${Colors.value(term.name)}`
    ).start();
    const courses = await Canvas.v1.Accounts.Courses.list({
      pathParams: { account_id },
      searchParams: { enrollment_term_id: term.id, state: ['available'] }
    });
    for (const course of courses) {
      const courseSpinner = ora(
        `Concluding ${Colors.value(course.name)}`
      ).start();
      const result = await Canvas.v1.Courses.delete_conclude_course({
        pathParams: { id: course.id },
        searchParams: { event: 'conclude' }
      });
      // TODO @groton/canvas-api needs to override this incorrect void result
      // @ts-expect-error 2339
      if (result.conclude) {
        courseSpinner.succeed(`${Colors.value(course.name)} concluded`);
      } else {
        courseSpinner.fail(`Unable to conclude ${Colors.value(course.name)}`);
        Log.error(JSON.stringify(result));
      }
    }
    termSpinner.succeed(
      `All available courses in term ${Colors.value(term.name)} concluded`
    );
  }
}
