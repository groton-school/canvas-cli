import { Colors } from '@battis/qui-cli.colors';
import { Core } from '@battis/qui-cli.core';
import '@battis/qui-cli.env';
import { Log } from '@battis/qui-cli.log';
import * as Plugin from '@battis/qui-cli.plugin';
import { Progress } from '@battis/qui-cli.progress';
import { select } from '@inquirer/prompts';
import * as SnapshotMultiple from '@msar/snapshot-multiple/dist/SnapshotMultiple.js';
import { OAuth2 } from '@oauth2-cli/qui-cli-plugin';
import open from 'open';
import ora from 'ora';
import { OneRoster } from './OneRoster.js';

await Core.configure({ core: { requirePositionals: true } });

export type Configuration = Plugin.Configuration & {
  blackbaudInstanceId?: string;
  canvasInstanceUrl?: string | URL;
  termsPath?: string;
  departmentAccountMapPath?: string;
  coursesWithDepartmentsPath?: string;
  snapshotPath?: string;
};

export const name = 'sis-import';
export const src = import.meta.dirname;

let blackbaudInstanceId: string | undefined = undefined;
let canvasInstanceUrl: URL | undefined = undefined;
let termsPath: string | undefined = undefined;
let departmentAccountMapPath: string | undefined = undefined;
let coursesWithDepartmentsPath: string | undefined = undefined;
let snapshotPath: string | undefined = undefined;

export function configure(config: Configuration = {}) {
  blackbaudInstanceId = Plugin.hydrate(
    config.blackbaudInstanceId,
    blackbaudInstanceId
  );
  if (config.canvasInstanceUrl) {
    canvasInstanceUrl = new URL(config.canvasInstanceUrl);
  }
  termsPath = Plugin.hydrate(config.termsPath, termsPath);
  departmentAccountMapPath = Plugin.hydrate(
    config.departmentAccountMapPath,
    departmentAccountMapPath
  );
  coursesWithDepartmentsPath = Plugin.hydrate(
    config.coursesWithDepartmentsPath,
    coursesWithDepartmentsPath
  );
  snapshotPath = Plugin.hydrate(config.snapshotPath, snapshotPath);
}

export function options(): Plugin.Options {
  return {
    opt: {
      blackbaudInstanceId: {
        description: `MySchoolApp instance identifier`
      },
      canvasInstanceUrl: {
        description: `Canvas instance URL`
      },
      termsPath: {
        description: `Path to All Terms CSV file`
      },
      departmentAccountMapPath: {
        description: `Path to Department Account Map CSV file`
      },
      coursesWithDepartmentsPath: {
        description: `Path to Courses with Departments CSV file`
      }
    }
  };
}

export function init(args: Plugin.ExpectedArguments<typeof options>) {
  const {
    positionals: [snapshotPath],
    values: {
      blackbaudInstanceId = process.env.BLACKBAUD_INSTANCE_ID,
      canvasInstanceUrl = process.env.CANVAS_INSTANCE_URL,
      termsPath = process.env.TERMS_CSV,
      departmentAccountMapPath = process.env.DEPARTMENT_ACCOUNT_MAP_CSV,
      coursesWithDepartmentsPath = process.env.COURSES_WITH_DEPARTMENTS_CSV
    }
  } = args;

  configure({
    blackbaudInstanceId,
    canvasInstanceUrl,
    termsPath,
    departmentAccountMapPath,
    coursesWithDepartmentsPath,
    snapshotPath
  });
}

function canvasURL(url: URL | string) {
  return new URL(url, canvasInstanceUrl);
}

export async function run() {
  if (
    !snapshotPath ||
    !blackbaudInstanceId ||
    !canvasInstanceUrl ||
    !termsPath ||
    !departmentAccountMapPath ||
    !coursesWithDepartmentsPath
  ) {
    throw new Error(
      Log.syntaxColor({
        snapshotPath,
        blackbaudInstanceId,
        canvasInstanceUrl,
        termsPath,
        departmentAccountMapPath,
        coursesWithDepartmentsPath
      })
    );
  }
  OneRoster.init({
    blackbaudInstanceId,
    termsPath,
    departmentAccountMapPath,
    coursesWithDepartmentsPath
  });

  let spinner = ora(`Loading ${Colors.url(snapshotPath)}`).start();
  let snapshots: SnapshotMultiple.Data = [];
  try {
    snapshots = await SnapshotMultiple.load(snapshotPath);
    if (!Array.isArray(snapshots)) {
      throw new Error(`Error loading data`);
    }
    spinner.succeed(
      `Loaded ${snapshots.length} section snapshot${snapshots.length > 1 ? 's' : ''}`
    );
  } catch (error) {
    spinner.fail(Colors.error((error as Error).message));
  }

  for (const section of snapshots.map((snapshot) => new OneRoster(snapshot))) {
    const response = await OAuth2.request(
      canvasURL(`/api/v1/courses/sis_course_id:${section.sis_course_id}`)
    );
    let course: any;
    let skip = false;
    if (response.status != 404) {
      course = await response.json();
      const next: Record<string, () => Promise<boolean> | boolean> = {
        'overlay existing content': () => false,
        'reset content and replace': async () => {
          const spinner = ora(`Resetting ${Colors.value(course.name)}`).start();
          try {
            if (!course.id) {
              throw new Error(`Course has no id: ${Log.syntaxColor(course)}`);
            }
            course = await OAuth2.requestJSON(
              canvasURL(`/api/v1/courses/${course.id}/reset_content`),
              'POST'
            );
            if (!course || !course.id) {
              throw new Error(
                `Error resetting course: ${Log.syntaxColor(course)}`
              );
            }
            spinner.succeed(`Reset ${Colors.value(course.name)}`);
          } catch (error) {
            spinner.fail(Colors.error((error as Error).message));
          }
          return false;
        },
        'open in browser': async () => {
          open(canvasURL(`/courses/${course.id}`).toString());
          return await next[
            (await select({
              message: `How would you like to proceed?`,
              choices: Object.keys(next).filter(
                (key) => key != 'open in browser'
              )
            })) as keyof typeof next
          ]();
        },
        skip: () => true
      };
      skip =
        await next[
          (await select({
            message: `A course named ${Colors.value(course.name)} with sis_course_id ${Colors.value(section.sis_course_id)} already exists in Canvas.`,
            choices: Object.keys(next)
          })) as keyof typeof next
        ]();
    }
    if (!skip) {
      if (!course) {
        spinner = ora(
          `Creating ${Colors.value(section.snapshot.SectionInfo?.GroupName)} course in Canvas`
        ).start();
        try {
          course = await OAuth2.requestJSON(
            canvasURL(`/api/v1/accounts/${section.account_id}/courses`),
            'POST',
            new URLSearchParams({
              'course[name]': section.name,
              'course[term_id]': `sis_term)id:${section.sis_term_id}`,
              'course[sis_course_id]': section.sis_course_id,
              enable_sis_reactivation: 'true'
            })
          );
          if (!course || !course.id) {
            throw new Error(
              `Error creating course: ${Log.syntaxColor(course)}`
            );
          }
          spinner.succeed(`Created ${Colors.value(course.name)}`);
        } catch (error) {
          spinner.fail(Colors.error((error as Error).message));
        }
      }

      if (
        section.snapshot.Assignments &&
        section.snapshot.Assignments.length > 0
      ) {
        let created = 0;
        try {
          Progress.start({ max: section.snapshot.Assignments?.length });
          section.snapshot.Assignments.sort(
            (a, b) =>
              new Date(a.DueDate).getTime() - new Date(b.DueDate).getTime()
          ).forEach(async (assignment, order) => {
            const result: any = await OAuth2.requestJSON(
              canvasURL(`/api/v1/courses/${course.id}/assignments`),
              'POST',
              new URLSearchParams({
                'assignment[name]': assignment.ShortDescription,
                'assignment[position]': order.toString(),
                'assignment[due_at]': new Date(
                  assignment.DueDate
                ).toISOString(),
                'assignment[description]': assignment.LongDescription,
                'assignment[published]': assignment.PublishInd.toString()
              })
            );
            if (result && result.name) {
              Progress.caption(result.name);
              Progress.increment();
              created++;
            } else {
              throw new Error(`Unexpected result: ${Log.syntaxColor(result)}`);
            }
          });
          if (created == section.snapshot.Assignments.length) {
            Log.info(`✓ Created ${created} assigments`);
          } else {
            throw new Error(
              `Created ${Colors.error(created)} of ${section.snapshot.Assignments.length} assignments`
            );
          }
          Progress.stop();
        } catch (error) {
          Progress.stop();
          console.error(error);
        }
      }
    }
  }
}
