import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import '@qui-cli/env';
import { Log } from '@qui-cli/log';
import * as Plugin from '@qui-cli/plugin';
import ora from 'ora';

export type Configuration = {
  courseId?: string;
  hideInGradebook?: boolean;
};

export const name = 'hide-in-gradebook';

let course_id: string | undefined = undefined;
let hide_in_gradebook = false;

export async function configure(config: Configuration = {}) {
  course_id = Plugin.hydrate(config.courseId, course_id);
  hide_in_gradebook = Plugin.hydrate(config.hideInGradebook, hide_in_gradebook);
}

export function options(): Plugin.Options {
  return {
    flag: {
      hideInGradebook: {
        description: `Enable/disable temporary hiding of assignment grade in gradebook (default ${Colors.value(hide_in_gradebook)})`,
        default: hide_in_gradebook
      }
    },
    opt: {
      courseId: {
        description: `Canvas ID of course to process`
      }
    }
  };
}

export function init(args: Plugin.ExpectedArguments<typeof options>) {
  configure(args.values);
}

export async function run() {
  if (!course_id) {
    throw new Error(`${Colors.value('course_id')} must be defined`);
  }
  try {
    for (const assignment of await Canvas.v1.Courses.Assignments.list({
      pathParams: { course_id },
      searchParams: { per_page: 100 }
    })) {
      if (assignment.hide_in_gradebook != hide_in_gradebook) {
        const spinner = ora().start(
          `${assignment.name} due ${assignment.due_at}`
        );
        try {
          await Canvas.v1.Courses.Assignments.update({
            pathParams: { course_id, id: assignment.id },
            params: {
              'assignment[hide_in_gradebook]': hide_in_gradebook
            }
          });
        } catch (error) {
          spinner.fail(
            Colors.error(`${spinner.text}: ${(error as Error).message}`)
          );
        }
      }
    }
  } catch (error) {
    Log.error(Colors.error((error as Error).message));
  }
}
