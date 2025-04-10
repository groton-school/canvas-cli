import { Colors } from '@battis/qui-cli.colors';
import '@battis/qui-cli.env';
import { Log } from '@battis/qui-cli.log';
import * as Plugin from '@battis/qui-cli.plugin';
import * as Canvas from '@groton/canvas-cli.api';
import path from 'node:path';

export type Configuration = {
  canvasInstanceUrl?: string;
  courseId?: string;
  hideInGradebook?: boolean;
};

export const name = '@groton/canvas-assignments-cli';
export const src = import.meta.dirname;

let course_id: string | undefined = undefined;
let canvas_instance_url: string | undefined = undefined;
let hide_in_gradebook = false;

export async function configure(config: Configuration = {}) {
  canvas_instance_url = Plugin.hydrate(
    config.canvasInstanceUrl,
    canvas_instance_url
  );
  course_id = Plugin.hydrate(config.courseId, course_id);
  hide_in_gradebook = Plugin.hydrate(config.hideInGradebook, hide_in_gradebook);

  if (config.canvasInstanceUrl) {
    if (
      process.env.CANVAS_CLIENT_ID &&
      process.env.CANVAS_CLIENT_SECRET &&
      process.env.CANVAS_REDIRECT_URI
    ) {
      Log.info(`Using Canvas instance ${Colors.url(config.canvasInstanceUrl)}`);
      const canvasConfig = {
        instance_url: config.canvasInstanceUrl,
        client_id: process.env.CANVAS_CLIENT_ID,
        client_secret: process.env.CANVAS_CLIENT_SECRET,
        redirect_uri: process.env.CANVAS_REDIRECT_URI
      };
      if (process.env.CANVAS_TOKEN_STORE) {
        // @ts-expect-error 2339 should really type CanvasConfig, but need to directly import @oauth2-cli/canvas for that
        canvasConfig.store = path.join(
          process.env.CANVAS_TOKEN_STORE,
          `${new URL(config.canvasInstanceUrl).hostname}.json`
        );
      }
      Canvas.init(canvasConfig);
    }
  }
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
      canvasInstanceUrl: {
        description: `URL of canvas instance`
      },
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
  if (!canvas_instance_url || !course_id) {
    throw new Error(`Insufficient information`);
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
