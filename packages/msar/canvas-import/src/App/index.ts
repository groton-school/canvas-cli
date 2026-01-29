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
import { Root } from '@qui-cli/root';
import { Validators } from '@qui-cli/validators';
import fs from 'node:fs';
import path from 'node:path';
import ora from 'ora';
import * as OneRoster from '../OneRoster.js';
import * as Snapshot from '../Snapshot/index.js';
import { importAssignments } from './Assignments.js';
import { handleDuplicateCourse, log } from './Courses.js';
import { importBulletinBoard, importTopics } from './Pages.js';
import * as Preferences from './Preferences.js';
import * as Workspace from './Workspace.js';

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
  skipTeacherless?: boolean;
};

export const name = 'canvas-import';
export const src = path.dirname(import.meta.dirname);

export function configure(config: Configuration = {}) {
  Preferences.setDuplicates(config.duplicates);
  Preferences.setAssignments(config.assignments);
  Preferences.setBulletinBoard(config.bulletinBoard);
  Preferences.setTopics(config.topics);
  Preferences.setSkipTeacherless(config.skipTeacherless);
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
      },
      skipTeacherless: {
        description: `Include sections that have no teachers (likely community groups)`,
        default: Preferences.skipTeacherless()
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

export async function run() {
  const spinner = ora(`Loading ${Colors.url(Snapshot.path())}`).start();
  let snapshots: Imported.Multiple.Data = [];
  const users: Record<Canvas.Users.User['sis_user_id'], Canvas.Users.User> = {};
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
    Output.configure({
      outputPath: Output.filePathFromOutputPath(
        Output.outputPath() !== Root.path()
          ? Output.outputPath()
          : path.dirname(Snapshot.path()),
        'canvas-import.json'
      )
    });
    spinner.succeed(
      `Loaded ${snapshots.length} section snapshot${snapshots.length > 1 ? 's' : ''}`
    );
  } catch (error) {
    spinner.fail(Colors.error((error as Error).message));
  }

  // TODO write partial updates to index or tmp piecemeal
  for (let section of snapshots) {
    if (!Preferences.skipTeacherless() || section.SectionInfo?.TeacherId) {
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
          pathParams: {
            id: `sis_course_id:${OneRoster.sis_course_id(section)}`
          }
        });
      } catch (e) {
        Log.debug(e as object);
      }
      if (course) {
        if (
          (
            await Canvas.v1.Courses.Assignments.list({
              pathParams: { course_id: course.id }
            })
          ).length > 0 ||
          (
            await Canvas.v1.Courses.Pages.list({
              pathParams: { course_id: course.id }
            })
          ).length > 0
        ) {
          course = await handleDuplicateCourse({ course, section });
        }
      } else {
        course = await Canvas.v1.Accounts.Courses.create({
          pathParams: {
            account_id: (await OneRoster.account_id(section)).toString()
          },
          params: {
            ...Snapshot.Section.toCanvasArgs(section),
            'course[term_id]': (await Workspace.getTermId()).toString()
          }
        });
        log(course, 'Course created');
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
        if (section.SectionInfo?.TeacherId === null) {
          log(course, `No teacher in snapshot`, 'warning');
        } else {
          const sis_user_id = OneRoster.sis_user_id(section);
          if (!users[sis_user_id]) {
            try {
              const user = await Canvas.v1.Users.show_user_details({
                pathParams: { id: `sis_user_id:${sis_user_id}` }
              });
              users[sis_user_id] = user;
            } catch (_) {
              users[sis_user_id] = await Canvas.v1.Accounts.Users.create({
                pathParams: { account_id: 1 },
                params: {
                  'user[name]': section.SectionInfo?.Teacher,
                  'pseudonym[sis_user_id]': sis_user_id,
                  'pseudonym[unique_id]': sis_user_id,
                  enable_sis_reactivation: true,
                  'pseudonym[send_confirmation]': false
                }
              });
              await Canvas.v1.Users.update({
                pathParams: { id: users[sis_user_id].id },
                params: { 'user[event]': 'suspend' }
              });
              log(
                course,
                `Added ${Colors.value(users[sis_user_id].name)} as a suspended user`
              );
            }
          }
          await Canvas.v1.Courses.Enrollments.enroll_user_courses({
            pathParams: { course_id: course.id.toString() },
            params: {
              'enrollment[user_id]': `sis_user_id:${sis_user_id}`,
              'enrollment[type]': 'TeacherEnrollment',
              'enrollment[enrollment_state]': 'active'
            }
          });
          log(
            course,
            `Enrolled ${Colors.value(users[sis_user_id].name)} as teacher`
          );
        }

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
        } catch (_) {
          log(
            course,
            `Could not be moved out of the ${Colors.path('Import Workspace')} term`,
            'warning'
          );
        }
        if (Preferences.bulletinBoard()) {
          await Canvas.v1.Courses.update({
            pathParams: { id: course.id.toString() },
            params: { 'course[default_view]': 'wiki' }
          });
          log(course, `Set front page to bulletin board page`);
        }

        log(
          course,
          Colors.url(
            path.join(
              Canvas.plugin.instance_url,
              'courses',
              course.id.toString()
            )
          )
        );
      }
      Output.writeJSON(Output.outputPath(), snapshots, {
        overwrite: true,
        silent: true
      });
    } else {
      Log.info(
        `Skipping teacherless section ${Colors.value(section.SectionInfo?.GroupName)}`
      );
    }
  }
  Output.writeJSON(Output.outputPath(), snapshots, { overwrite: true });
}
