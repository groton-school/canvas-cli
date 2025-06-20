import { Colors } from '@battis/qui-cli.colors';
import '@battis/qui-cli.env';
import * as Plugin from '@battis/qui-cli.plugin';
import { Canvas } from '@groton/canvas-cli.client.qui-cli';
import path from 'node:path';

export type Configuration = {
  courseId?: string;
  hideInGradebook?: boolean;
};

export const name = '@groton/canvas-assignments-cli';
export const src = path.resolve(import.meta.dirname, '../../..');

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
  for (const assignment of await Canvas.v1.Courses.Assignments.list({
    pathParams: { course_id },
    searchParams: { per_page: 100 }
  })) {
    if (assignment.hide_in_gradebook != hide_in_gradebook) {
      await Canvas.v1.Courses.Assignments.update({
        pathParams: { course_id, id: assignment.id.toString() },
        params: {
          'assignment[hide_in_gradebook]': hide_in_gradebook
        }
      });
    }
  }
}
