import { Colors } from '@battis/qui-cli.colors';
import { Core } from '@battis/qui-cli.core';
import '@battis/qui-cli.env';
import { Log } from '@battis/qui-cli.log';
import * as Plugin from '@battis/qui-cli.plugin';
import * as Canvas from '@groton/canvas-types';
import { Output } from '@msar/output';
import * as Imported from '@msar/types.import';
import fs from 'node:fs';
import path from 'node:path';
import ora from 'ora';
import * as OneRoster from '../OneRoster.js';
import * as SkyAPI from '../SkyAPI/index.js';
import * as Snapshot from '../Snapshot/index.js';
import { importAssignments } from './Assignments.js';
import { handleDuplicateCourse } from './Courses.js';
import { importBulletinBoard, importTopics } from './Pages.js';
import * as Preferences from './Preferences.js';

export * as Preferences from './Preferences.js';

await Core.configure({ core: { requirePositionals: true } });

export type Configuration = Plugin.Configuration & {
  blackbaudInstanceId?: string;
  canvasInstanceUrl?: string | URL;
  termsPath?: string;
  departmentAccountMapPath?: string;
  coursesWithDepartmentsPath?: string;
  snapshotPath?: string;
  duplicates?: Preferences.DuplicateHandling;
  ignoreErrors?: boolean;
  assignments?: boolean;
  bulletinBoard?: boolean;
  topics?: boolean;
};

export const name = 'sis-import';
export const src = path.dirname(import.meta.dirname);

export function configure(config: Configuration = {}) {
  Preferences.setDuplicates(config.duplicates);
  Preferences.setIgnoreErrors(config.ignoreErrors);
  Preferences.setAssignments(config.assignments);
  Preferences.setBulletinBoard(config.bulletinBoard);
  Preferences.setTopics(config.topics);
  Snapshot.setPath(config.snapshotPath);
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
      assignments: {
        description: `Create assignments (default ${Colors.value(Preferences.assignments())}, ${Colors.value('--no-assignments')} to skip)`,
        default: Preferences.assignments()
      },
      bulletinBoard: {
        description: `Create bulletin board (default ${Colors.value(Preferences.bulletinBoard())}, ${Colors.value('--no-bulletinBoard')} to skip)`,
        default: Preferences.bulletinBoard()
      },
      topics: {
        description: `Create topics (default ${Colors.value(Preferences.topics())}, ${Colors.value('--no-topics')} to skip)`,
        default: Preferences.topics()
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
      },
      duplicates: {
        description: `Specify a duplicate course handling option (One of ${['update', 'reset', 'skip'].map((t) => Colors.quotedValue(`"${t}"`)).join(', ')})`,
        validate: (value?) =>
          value && (value == 'update' || value == 'reset' || value == 'skip')
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
      coursesWithDepartmentsPath = process.env.COURSES_WITH_DEPARTMENTS_CSV,
      ...values
    }
  } = args;
  SkyAPI.init({
    client_id: process.env.SKY_CLIENT_ID!,
    client_secret: process.env.SKY_CLIENT_SECRET!,
    subscription_key: process.env.SKY_SUBSCRIPTION_KEY!,
    redirect_uri: process.env.SKY_REDIRECT_URI!,
    store: './var/sky-api.json'
  });
  Canvas.init({
    instance_url: canvasInstanceUrl!,
    client_id: process.env.CANVAS_CLIENT_ID!,
    client_secret: process.env.CANVAS_CLIENT_SECRET!,
    redirect_uri: process.env.CANVAS_REDIRECT_URI!,
    store: process.env.CANVAS_TOKEN_STORE
  });
  configure({
    blackbaudInstanceId,
    canvasInstanceUrl,
    termsPath,
    departmentAccountMapPath,
    coursesWithDepartmentsPath,
    snapshotPath,
    ...values
  });
}

export async function run() {
  const spinner = ora(`Loading ${Colors.url(Snapshot.path())}`).start();
  let snapshots: Imported.Multiple.Data = [];
  try {
    snapshots = JSON.parse(fs.readFileSync(Snapshot.path()).toString()); //await SnapshotMultiple.load(Snapshot.path());
    if (!Array.isArray(snapshots)) {
      throw new Error(`Error loading data`);
    }
    Output.configure({ outputPath: Snapshot.path() });
    spinner.succeed(
      `Loaded ${snapshots.length} section snapshot${snapshots.length > 1 ? 's' : ''}`
    );
  } catch (error) {
    spinner.fail(Colors.error((error as Error).message));
  }

  let workspaceTerm = await Canvas.EnrollmentTerms.get({
    sis_term_id: Preferences.WORKSPACE_TERM
  });
  if (!workspaceTerm) {
    workspaceTerm = await Canvas.EnrollmentTerms.create({
      args: {
        'enrollment_term[sis_term_id]': Preferences.WORKSPACE_TERM,
        'enrollment_term[name]': 'Import Workspace'
      }
    });
  }

  // TODO write partial updates to index or tmp piecemeal
  for (const section of snapshots) {
    let course = await Canvas.Courses.get({
      sis_course_id: OneRoster.sis_course_id(section)
    });
    if (course) {
      course = await handleDuplicateCourse({ course, section });
    } else {
      course = await Canvas.Courses.create({
        account_id: OneRoster.account_id(section),
        args: {
          ...Snapshot.Section.toCanvasArgs(section),
          'course[term_id]': `sis_term_id:${Preferences.WORKSPACE_TERM}`
        }
      });
    }
    if (course) {
      // TODO check instance_url and alert on mismatch with process.env.CANVAS_INSTANCE_URL
      // TODO consolidate in importCourse
      if (section.SectionInfo) {
        section.SectionInfo.canvas = {
          id: course.id,
          instance_url: process.env.CANVAS_INSTANCE_URL,
          args: Snapshot.Section.toCanvasArgs(section),
          created_at: course.created_at
        };
      }
      // TODO cache enrollments for updating
      await Canvas.Enrollments.create({
        course,
        args: {
          'enrollment[user_id]': `sis_user_id:${OneRoster.sis_user_id(section)}`,
          'enrollment[type]': 'TeacherEnrollment',
          'enrollment[enrollment_state]': 'active'
        }
      });

      if (Preferences.assignments()) {
        await importAssignments({ course, section });
      }

      if (Preferences.bulletinBoard()) {
        await importBulletinBoard({ course, section });
      }

      if (Preferences.topics() && section.Topics) {
        await importTopics({ course, section });
      }

      try {
        await Canvas.Courses.update({
          course,
          args: {
            'course[term_id]': `sis_term_id:${OneRoster.sis_term_id(section)}`
          }
        });
      } catch (_) {
        Log.warning(
          `Course ${Colors.value(course.name)} could not be moved out of the Import Workspace term.`
        );
      }
      if (Preferences.bulletinBoard()) {
        await Canvas.Courses.update({
          course,
          args: { 'course[default_view]': 'wiki' }
        });
      }
    }
  }
  Output.writeJSON(
    Output.filePathFromOutputPath(Output.outputPath(), 'index.json'),
    snapshots,
    { overwrite: true }
  );
}
