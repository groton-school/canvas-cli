import { Colors } from '@battis/qui-cli.colors';
import { Core } from '@battis/qui-cli.core';
import '@battis/qui-cli.env';
import { Log } from '@battis/qui-cli.log';
import * as Plugin from '@battis/qui-cli.plugin';
import { select } from '@inquirer/prompts';
import * as SnapshotMultiple from '@msar/snapshot-multiple/dist/SnapshotMultiple.js';
import open from 'open';
import ora from 'ora';
import * as Course from './Canvas/Course.js';
import * as Canvas from './Canvas/URL.js';
import * as Flags from './Flags.js';
import { OneRoster } from './OneRoster.js';
import * as Assignments from './Snapshot/Assignments.js';
import * as AssignmentTypes from './Snapshot/AssignmentTypes.js';
import * as Snapshot from './Snapshot/Path.js';

await Core.configure({ core: { requirePositionals: true } });

export type Configuration = Plugin.Configuration & {
  files?: boolean;
  ignoreErrors?: boolean;
  blackbaudInstanceId?: string;
  canvasInstanceUrl?: string | URL;
  termsPath?: string;
  departmentAccountMapPath?: string;
  coursesWithDepartmentsPath?: string;
  snapshotPath?: string;
};

export const name = 'sis-import';
export const src = import.meta.dirname;

export function configure(config: Configuration = {}) {
  Flags.setFiles(config.files);
  Flags.setIgnoreErrors(config.ignoreErrors);
  Snapshot.setPath(config.snapshotPath);
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
    flag: {
      ignoreErrors: {
        description: `Ignore data errors where possible (default ${Colors.value(Flags.ignoreErrors())}, ${Colors.value('--no-ignoreErrors')} to halt on errors)`,
        default: Flags.ignoreErrors()
      },
      files: {
        description: `Upload file attachments (default ${Colors.value(Flags.files())}, ${Colors.value('--no-files')} to skip)`,
        default: Flags.files()
      }
    },
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
      files,
      ignoreErrors,
      blackbaudInstanceId = process.env.BLACKBAUD_INSTANCE_ID,
      canvasInstanceUrl = process.env.CANVAS_INSTANCE_URL,
      termsPath = process.env.TERMS_CSV,
      departmentAccountMapPath = process.env.DEPARTMENT_ACCOUNT_MAP_CSV,
      coursesWithDepartmentsPath = process.env.COURSES_WITH_DEPARTMENTS_CSV
    }
  } = args;
  Flags.setFiles(files as unknown as boolean);
  Flags.setIgnoreErrors(ignoreErrors as unknown as boolean);
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
  const snapshotPath = Snapshot.path();
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
      const assignmentGroups = await AssignmentTypes.create({
        course,
        section
      });
      await Assignments.create({ course, section, assignmentGroups });
    }
  }
}
