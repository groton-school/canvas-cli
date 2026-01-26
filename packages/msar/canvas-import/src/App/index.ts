import { JSONObject } from '@battis/typescript-tricks';
import { input } from '@inquirer/prompts';
import { Output } from '@msar/output';
import * as Imported from '@msar/types.import';
import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import { Core } from '@qui-cli/core';
import { Env } from '@qui-cli/env';
import { Log } from '@qui-cli/log';
import * as Plugin from '@qui-cli/plugin';
import { Validators } from '@qui-cli/validators';
import fs from 'node:fs';
import path from 'node:path';
import ora from 'ora';
import * as OneRoster from '../OneRoster.js';
import * as Snapshot from '../Snapshot/index.js';
import { importAssignments } from './Assignments.js';
import { handleDuplicateCourse } from './Courses.js';
import { importBulletinBoard, importTopics } from './Pages.js';
import * as Preferences from './Preferences.js';

export * as Preferences from './Preferences.js';

await Core.configure({ core: { requirePositionals: true } });

export type Configuration = Plugin.Configuration & {
  blackbaudInstanceId?: string;
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

export const name = 'canvas-import';
export const src = path.dirname(import.meta.dirname);

export function configure(config: Configuration = {}) {
  Preferences.setDuplicates(config.duplicates);
  Preferences.setAssignments(config.assignments);
  Preferences.setBulletinBoard(config.bulletinBoard);
  Preferences.setTopics(config.topics);
  Snapshot.setPath(config.snapshotPath);
  OneRoster.setInstanceId(config.blackbaudInstanceId);
  OneRoster.setTermsPath(config.termsPath);
  OneRoster.setDepartmentAccountMapPath(config.departmentAccountMapPath);
  OneRoster.setCoursesWithDepartmentsPath(config.coursesWithDepartmentsPath);
}

export function options(): Plugin.Options {
  return {
    man: [{ level: 1, text: 'Import options' }],
    flag: {
      assignments: {
        description: `Create assignments`,
        default: Preferences.assignments()
      },
      bulletinBoard: {
        description: `Create bulletin board`,
        default: Preferences.bulletinBoard()
      },
      topics: {
        description: `Create topics`,
        default: Preferences.topics()
      }
    },
    opt: {
      blackbaudInstanceId: {
        description: `MySchoolApp instance identifier`
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
        validate: (value: unknown): boolean =>
          value !== undefined &&
          (value == 'update' || value == 'reset' || value == 'skip')
      }
    }
  };
}

export async function init(args: Plugin.ExpectedArguments<typeof options>) {
  const {
    positionals: [snapshotPath],
    values: {
      blackbaudInstanceId = await Env.get({ key: 'BLACKBAUD_INSTANCE_ID' }),
      canvasInstanceUrl = await Env.get({ key: 'CANVAS_INSTANCE_URL' }),
      termsPath = await Env.get({ key: 'TERMS_CSV' }),
      departmentAccountMapPath = await Env.get({
        key: 'DEPARTMENT_ACCOUNT_MAP_CSV'
      }),
      coursesWithDepartmentsPath = await Env.get({
        key: 'COURSES_WITH_DEPARTMENTS_CSV'
      }),
      ...values
    }
  } = args;
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

let _workspaceTerm: Canvas.EnrollmentTerms.EnrollmentTerm | undefined =
  undefined;
async function workspaceTerm() {
  if (!_workspaceTerm) {
    _workspaceTerm = await Canvas.v1.Accounts.Terms.retrieve_enrollment_term({
      pathParams: {
        account_id: '1',
        id: `sis_term_id:${Preferences.WORKSPACE_TERM}`
      }
    });
    if (!_workspaceTerm) {
      _workspaceTerm = await Canvas.v1.Accounts.Terms.create({
        pathParams: { account_id: '1' },
        params: {
          'enrollment_term[sis_term_id]': Preferences.WORKSPACE_TERM,
          'enrollment_term[name]': 'Import Workspace'
        }
      });
    }
  }
  return _workspaceTerm;
}

export async function run() {
  const spinner = ora(`Loading ${Colors.url(Snapshot.path())}`).start();
  let snapshots: Imported.Multiple.Data = [];
  try {
    const file = JSON.parse(fs.readFileSync(Snapshot.path()).toString());
    if (Array.isArray(file)) {
      snapshots = file;
    } else {
      snapshots = [file];
    }
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

  // TODO write partial updates to index or tmp piecemeal
  for (let section of snapshots) {
    if (
      section.SectionInfo?.canvas?.instance_url &&
      typeof section.SectionInfo.canvas.instance_url === 'string'
    ) {
      configure({
        canvasInstanceUrl:
          section.SectionInfo.canvas.instance_url ||
          Canvas.client().instance_url ||
          (await Env.get({ key: 'CANVAS_INSTANCE_URL' })) ||
          (await input({
            message: `What is the hostname for your Canvas instance?`,
            validate: (value) => !!Validators.isHostname({})(value),
            transformer: (hostname: string) => `https://${hostname}`
          }))
      });
    }

    let course: Canvas.Courses.Course | undefined = undefined;
    try {
      course = await Canvas.v1.Courses.get({
        pathParams: { id: `sis_course_id:${OneRoster.sis_course_id(section)}` }
      });
    } catch (e) {
      Log.debug(e as object);
    }
    if (course) {
      course = await handleDuplicateCourse({ course, section });
    } else {
      await workspaceTerm();
      course = await Canvas.v1.Accounts.Courses.create({
        pathParams: { account_id: OneRoster.account_id(section).toString() },
        params: {
          ...Snapshot.Section.toCanvasArgs(section),
          'course[term_id]': `sis_term_id:${Preferences.WORKSPACE_TERM}`
        }
      });
    }
    if (course) {
      section = Snapshot.Files.calculateHashes(
        section as JSONObject
      ) as Imported.Multiple.Item;

      // TODO consolidate in importCourse
      if (section.SectionInfo) {
        section.SectionInfo.canvas = {
          id: course.id.toString(),
          instance_url: Canvas.client().instance_url,
          args: Snapshot.Section.toCanvasArgs(section),
          created_at: course.created_at
        };
      }
      // TODO cache enrollments for updating
      await Canvas.v1.Courses.Enrollments.enroll_user_courses({
        pathParams: { course_id: course.id.toString() },
        params: {
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
        await Canvas.v1.Courses.update({
          pathParams: { id: course.id.toString() },
          params: {
            'course[term_id]': `sis_term_id:${OneRoster.sis_term_id(section)}`
          }
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) {
        Log.warning(
          `Course ${Colors.value(course.name)} could not be moved out of the Import Workspace term.`
        );
      }
      if (Preferences.bulletinBoard()) {
        await Canvas.v1.Courses.update({
          pathParams: { id: course.id.toString() },
          params: { 'course[default_view]': 'wiki' }
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
