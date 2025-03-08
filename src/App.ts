import { Colors } from '@battis/qui-cli.colors';
import { Core } from '@battis/qui-cli.core';
import '@battis/qui-cli.env';
import { Log } from '@battis/qui-cli.log';
import * as Plugin from '@battis/qui-cli.plugin';
import { select } from '@inquirer/prompts';
import * as SnapshotMultiple from '@msar/snapshot-multiple/dist/SnapshotMultiple.js';
import open from 'open';
import ora from 'ora';
import * as Canvas from './Canvas.js';
import * as OneRoster from './OneRoster.js';
import * as Preferences from './Preferences.js';
import * as SkyAPI from './SkyAPI.js';
import * as Snapshot from './Snapshot.js';

await Core.configure({ core: { requirePositionals: true } });

export type Configuration = Plugin.Configuration & {
  blackbaudInstanceId?: string;
  skyClientId?: string;
  skyClientSecret?: string;
  skySubscriptionKey?: string;
  skyRedirectUri?: string;
  canvasInstanceUrl?: string | URL;
  termsPath?: string;
  departmentAccountMapPath?: string;
  coursesWithDepartmentsPath?: string;
  snapshotPath?: string;
  files?: boolean;
  ignoreErrors?: boolean;
};

export const name = 'sis-import';
export const src = import.meta.dirname;

export function configure(config: Configuration = {}) {
  Preferences.setFiles(config.files);
  Preferences.setIgnoreErrors(config.ignoreErrors);
  Snapshot.setPath(config.snapshotPath);
  if (
    config.skyClientId &&
    config.skyClientSecret &&
    config.skySubscriptionKey &&
    config.skyRedirectUri
  ) {
    SkyAPI.init({
      client_id: config.skyClientId,
      client_secret: config.skyClientSecret,
      subscription_key: config.skySubscriptionKey,
      redirect_uri: config.skyRedirectUri
    });
  }
  if (config.canvasInstanceUrl) {
    Canvas.setUrl(config.canvasInstanceUrl);
  }
  OneRoster.setInstanceId(config.blackbaudInstanceId);
  OneRoster.setTermsPath(config.termsPath);
  OneRoster.setDepartmentAccountMapPath(config.departmentAccountMapPath);
  OneRoster.setCoursesWithDepartmentsPath(config.coursesWithDepartmentsPath);
}

export function options(): Plugin.Options {
  return {
    flag: {
      ignoreErrors: {
        description: `Ignore data errors where possible (default ${Colors.value(Preferences.ignoreErrors())}, ${Colors.value('--no-ignoreErrors')} to halt on errors)`,
        default: Preferences.ignoreErrors()
      },
      files: {
        description: `Upload file attachments (default ${Colors.value(Preferences.files())}, ${Colors.value('--no-files')} to skip)`,
        default: Preferences.files()
      }
    },
    opt: {
      blackbaudInstanceId: {
        description: `MySchoolApp instance identifier`
      },
      skyClientId: {
        description: `Blackbaud SKY API client ID`
      },
      skyClientSecret: {
        description: `Blackbaud SKY API client secret`
      },
      skySubscriptionKey: {
        description: `Blackbaud SKY API subscription access key`
      },
      skyRedirectUri: {
        description: `Blackbaud SKY API redirect URI`
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
      skyClientId = process.env.SKY_CLIENT_ID,
      skyClientSecret = process.env.SKY_CLIENT_SECRET,
      skySubscriptionKey = process.env.SKY_SUBSCRIPTION_KEY,
      skyRedirectUri = process.env.SKY_REDIRECT_URI,
      canvasInstanceUrl = process.env.CANVAS_INSTANCE_URL,
      termsPath = process.env.TERMS_CSV,
      departmentAccountMapPath = process.env.DEPARTMENT_ACCOUNT_MAP_CSV,
      coursesWithDepartmentsPath = process.env.COURSES_WITH_DEPARTMENTS_CSV,
      files,
      ignoreErrors
    }
  } = args;
  Preferences.setFiles(files as unknown as boolean);
  Preferences.setIgnoreErrors(ignoreErrors as unknown as boolean);
  configure({
    blackbaudInstanceId,
    skyClientId,
    skyClientSecret,
    skySubscriptionKey,
    skyRedirectUri,
    canvasInstanceUrl,
    termsPath,
    departmentAccountMapPath,
    coursesWithDepartmentsPath,
    snapshotPath
  });
}

export async function handleDuplicateCourse(course: Canvas.Courses.Model) {
  const next: Record<
    string,
    () =>
      | Promise<Canvas.Courses.Model | undefined>
      | Canvas.Courses.Model
      | undefined
  > = {
    'overlay existing content with snapshot': () => course,
    'reset content and replace with snapshot': async () => {
      return await Canvas.Courses.reset(course!);
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

  for (const section of snapshots) {
    let course = await Canvas.Courses.get({
      sis_course_id: OneRoster.sis_course_id(section)
    });
    if (course) {
      course = await handleDuplicateCourse(course);
    } else {
      course = await Canvas.Courses.create({
        account_id: OneRoster.account_id(section),
        args: Snapshot.Section.toCanvasArgs(section)
      });
    }
    if (course) {
      const assignments = await Snapshot.Assignments.hydrate(section);
      const assignmentGroups: Canvas.AssigmentGroups.Model[] = [];
      for (const assignmentType of Snapshot.AssignmentTypes.extract(
        assignments
      )) {
        assignmentGroups.push(
          await Canvas.AssigmentGroups.create({
            course,
            args: Snapshot.AssignmentTypes.toCanvasArgs(assignmentType)
          })
        );
      }
    }
  }
}
