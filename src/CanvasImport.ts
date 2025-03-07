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
import * as Assignment from './Canvas/Assignment.js';
import * as Course from './Canvas/Course.js';
import * as Canvas from './Canvas/URL.js';
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

let snapshotPath: string | undefined = undefined;

export function configure(config: Configuration = {}) {
  snapshotPath = Plugin.hydrate(config.snapshotPath, snapshotPath);
  if (config.canvasInstanceUrl) {
    Canvas.setUrl(config.canvasInstanceUrl);
  }
  OneRoster.init({
    blackbaudInstanceId: Plugin.hydrate(
      config.blackbaudInstanceId,
      OneRoster.instance
    ),
    termsPath: Plugin.hydrate(config.termsPath, OneRoster.termsPath),
    departmentAccountMapPath: Plugin.hydrate(
      config.departmentAccountMapPath,
      OneRoster.departmentAccountMapPath
    ),
    coursesWithDepartmentsPath: Plugin.hydrate(
      config.coursesWithDepartmentsPath,
      OneRoster.coursesWithDepartmentsPath
    )
  });
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

export async function handleDuplicateCourse(course: Course.Course) {
  const next: Record<
    string,
    () => Promise<Course.Course | undefined> | Course.Course | undefined
  > = {
    'overlay existing content with snapshot': () => course,
    'reset content and replace with snapshot': async () => {
      return await Course.reset(course!);
    },
    'open in browser to examine': async () => {
      open(Canvas.url(`/courses/${course!.id}`).toString());
      return await next[
        (await select({
          message: `How would you like to proceed?`,
          choices: Object.keys(next).filter(
            (key) => key != 'open in browser to examine'
          )
        })) as keyof typeof next
      ]();
    },
    skip: () => undefined
  };
  return await next[
    (await select({
      message: `A course named ${Colors.value(course.name)} with sis_course_id ${Colors.value(course.sis_course_id)} already exists in Canvas.`,
      choices: Object.keys(next)
    })) as keyof typeof next
  ]();
}

export async function run() {
  if (!snapshotPath) {
    throw new Error(
      Log.syntaxColor({
        snapshotPath
      })
    );
  }

  const spinner = ora(`Loading ${Colors.url(snapshotPath)}`).start();
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
    let course = await Course.get(section);
    if (course) {
      course = await handleDuplicateCourse(course);
    } else {
      course = await Course.create(section);
    }
    if (course) {
      if (
        section.snapshot.Assignments &&
        section.snapshot.Assignments.length > 0
      ) {
        Progress.start({ max: section.snapshot.Assignments?.length });
        let order = 0;
        for (const assignment of section.snapshot.Assignments.sort(
          (a, b) =>
            new Date(a.DueDate).getTime() - new Date(b.DueDate).getTime()
        )) {
          const a = await Assignment.create({
            assignment,
            course: course!,
            order
          });
          order++;
          Progress.caption(a.name);
          Progress.increment();
        }
        Progress.stop();
      }
    }
  }
}
