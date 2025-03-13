import { Colors } from '@battis/qui-cli.colors';
import { Core } from '@battis/qui-cli.core';
import '@battis/qui-cli.env';
import * as Plugin from '@battis/qui-cli.plugin';
import * as Canvas from '@groton/canvas-types';
import { select } from '@inquirer/prompts';
import type * as SnapshotMultiple from '@msar/snapshot-multiple/dist/SnapshotMultiple.d.ts';
import fs from 'node:fs';
import path from 'node:path';
import open from 'open';
import ora from 'ora';
import * as OneRoster from '../OneRoster.js';
import * as SkyAPI from '../SkyAPI/index.js';
import * as Snapshot from '../Snapshot/index.js';
import * as Preferences from './Preferences.js';

const WORKSPACE_TERM = 'groton-canvas-import-workspace';

await Core.configure({ core: { requirePositionals: true } });

export type Configuration = Plugin.Configuration & {
  blackbaudInstanceId?: string;
  canvasInstanceUrl?: string | URL;
  termsPath?: string;
  departmentAccountMapPath?: string;
  coursesWithDepartmentsPath?: string;
  snapshotPath?: string;
  duplicates?: Preferences.DuplicateHandling;
  files?: boolean;
  ignoreErrors?: boolean;
  assignments?: boolean;
  bulletinBoard?: boolean;
};

export const name = 'sis-import';
export const src = path.dirname(import.meta.dirname);

export function configure(config: Configuration = {}) {
  Preferences.setDuplicates(config.duplicates);
  Preferences.setIgnoreErrors(config.ignoreErrors);
  Preferences.setFiles(config.files);
  Preferences.setAssignments(config.assignments);
  Preferences.setBulletinBoard(config.bulletinBoard);
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
      files: {
        description: `Upload file attachments (default ${Colors.value(Preferences.files())}, ${Colors.value('--no-files')} to skip)`,
        default: Preferences.files()
      },
      assignments: {
        description: `Create assignments (default ${Colors.value(Preferences.assignments())}, ${Colors.value('--no-assignments')} to skip)`,
        default: Preferences.bulletinBoard()
      },
      bulletinBoard: {
        description: `Create bulletin board (default ${Colors.value(Preferences.bulletinBoard())}, ${Colors.value('--no-bulletinBoard')} to skip)`
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

type HandleDuplicatesOptions = {
  course: Canvas.Courses.Model;
  section: SnapshotMultiple.Item;
};

export async function handleDuplicateCourse({
  course,
  section
}: HandleDuplicatesOptions) {
  const next: Record<
    Preferences.DuplicateHandling,
    () =>
      | Promise<Canvas.Courses.Model | undefined>
      | Canvas.Courses.Model
      | undefined
  > = {
    update: async () => {
      const args = Snapshot.Section.toCanvasArgs(section);
      args['course[term_id]'] = `sis_term_id:${WORKSPACE_TERM}`;
      delete args['course[sis_course_id]'];
      delete args.enable_sis_reactivation;
      return await Canvas.Courses.update({ course, args });
    },
    reset: async () => {
      course = await Canvas.Courses.reset(course!);
      return await next.update();
    },
    browse: async () => {
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
    (Preferences.duplicates() ||
      (await select({
        message: `A course named ${Colors.value(course.name)} with sis_course_id ${Colors.value(course.sis_course_id)} already exists in Canvas.`,
        choices: [
          {
            value: 'update',
            description:
              'Import snapshot data into the course, potentially creating duplicate content'
          },
          {
            value: 'reset',
            description:
              'Reset the course content, erasing all existing content, and replace it with the snapshot'
          },
          {
            value: 'browse',
            description:
              'Open the current course in a browser and then make a decision about what to do'
          },
          {
            value: 'skip',
            description: 'Skip processing the snaphot import for this course'
          }
        ]
      }))) as keyof typeof next
  ]();
}

export async function run() {
  const spinner = ora(`Loading ${Colors.url(Snapshot.path())}`).start();
  let snapshots: SnapshotMultiple.Data = [];
  try {
    snapshots = JSON.parse(fs.readFileSync(Snapshot.path()).toString()); //await SnapshotMultiple.load(Snapshot.path());
    if (!Array.isArray(snapshots)) {
      throw new Error(`Error loading data`);
    }
    spinner.succeed(
      `Loaded ${snapshots.length} section snapshot${snapshots.length > 1 ? 's' : ''}`
    );
  } catch (error) {
    spinner.fail(Colors.error((error as Error).message));
  }

  let workspaceTerm = await Canvas.EnrollmentTerms.get({
    sis_term_id: WORKSPACE_TERM
  });
  if (!workspaceTerm) {
    workspaceTerm = await Canvas.EnrollmentTerms.create({
      args: {
        'enrollment_term[sis_term_id]': WORKSPACE_TERM,
        'enrollment_term[name]': 'Import Workspace'
      }
    });
  }

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
          'course[term_id]': `sis_term_id:${WORKSPACE_TERM}`
        }
      });
    }
    if (course) {
      await Canvas.Enrollments.create({
        course,
        args: {
          'enrollment[user_id]': `sis_user_id:${OneRoster.sis_user_id(section)}`,
          'enrollment[type]': 'TeacherEnrollment',
          'enrollment[enrollment_state]': 'active'
        }
      });

      if (Preferences.assignments()) {
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
        for (let order = 0; order < assignments.length; order++) {
          await Canvas.Assignments.create({
            course,
            args: await Snapshot.Assignments.toCanvasArgs({
              course,
              assignmentGroups,
              assignment: assignments[order],
              order
            })
          });
        }
      }

      if (Preferences.bulletinBoard() && section.BulletinBoard) {
        await Canvas.Pages.create({
          course,
          args: await Snapshot.PodiumPage.toCanvasArgs({
            course,
            title: 'Bulletin Board',
            body: section.BulletinBoard,
            layout: section.SectionInfo?.LayoutId || 0,
            front_page: true
          })
        });
      }

      const args: Canvas.Courses.Parameters = {
        'course[term_id]': `sis_term_id:${OneRoster.sis_term_id(section)}`
      };
      if (Preferences.bulletinBoard()) {
        args['course[default_view]'] = 'wiki';
      }
      await Canvas.Courses.update({ course, args });
    }
  }
}
