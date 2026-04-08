import { PathString } from '@battis/descriptive-types';
import { JSONObject } from '@battis/typescript-tricks';
import { input } from '@inquirer/prompts';
import { Output } from '@msar/output';
import * as Imported from '@msar/types.import';
import { Canvas } from '@oauth2-cli/canvas';
import { CanvasStudio } from '@oauth2-cli/canvas-studio';
import { Colors } from '@qui-cli/colors';
import { Positionals } from '@qui-cli/core';
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
import * as Workspace from './Workspace/index.js';

export * as Preferences from './Preferences.js';

export type Configuration = Plugin.Configuration & {
  blackbaudInstanceId?: string;
  termsPath?: PathString;
  departmentAccountMapPath?: PathString;
  coursesWithDepartmentsPath?: PathString;
  sisIdMapPath?: PathString;
  snapshotPath?: PathString;
  canvasStudioIndex?: PathString;
  duplicates?: Preferences.DuplicateHandling;
  ignoreErrors?: boolean;
  assignments?: boolean;
  bulletinBoard?: boolean;
  topics?: boolean;
  prefix?: string[];
  groupId?: string[];
  skipTeacherless?: boolean;
  skipTo?: number;
};

export const name = 'canvas-import';

let skipTo: number | undefined = undefined;
export function configure(config: Configuration = {}) {
  Preferences.setDuplicates(config.duplicates);
  Preferences.setAssignments(config.assignments);
  Preferences.setBulletinBoard(config.bulletinBoard);
  Preferences.setTopics(config.topics);
  Preferences.setSkipTeacherless(config.skipTeacherless);
  Preferences.setPrefixes(config.prefix);
  Preferences.setGroupIds(config.groupId);
  Preferences.setCanvasStudioIndex(config.canvasStudioIndex);
  Snapshot.setPath(config.snapshotPath);
  OneRoster.setInstanceId(config.blackbaudInstanceId);
  OneRoster.setTermsPath(config.termsPath);
  OneRoster.setDepartmentAccountMapPath(config.departmentAccountMapPath);
  OneRoster.setCoursesWithDepartmentsPath(config.coursesWithDepartmentsPath);
  OneRoster.setSisIdMapPath(config.sisIdMapPath);
  skipTo = Plugin.hydrate(config.skipTo, skipTo);
}

export function options(): Plugin.Options {
  Positionals.allowOnlyNamedArgs();
  Positionals.require({
    snapshotPath: {
      description: `Path to a snapshot index JSON file`
    }
  });
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
        description:
          `MySchoolApp instance identifier, may be inferred by OneRoster ` +
          `${Colors.varName('sourcedId')} values, where the first numeric ` +
          `component is the instance identifier (e.g. ` +
          `${Colors.value('cls-123-12345678')} identifies the instance ID as ` +
          `${Colors.value('123')}). Defaults to environment variable ` +
          `${Colors.varName('BLACKBAUD_INSTANCE_ID')}, if present.`,
        hint: Colors.value('###')
      },
      termsPath: {
        description:
          `Path to All Terms CSV file, must contain at least ` +
          `${Colors.varName('Term ID')}, ${Colors.varName('Length')}, ` +
          `${Colors.varName('term_id')}, ${Colors.varName('name')} columns, ` +
          `where ${Colors.value('Term ID')} and ${Colors.varName('Length')} ` +
          `are Blackbaud term/duration IDs and Length is a duration (number ` +
          `of terms) and ${Colors.varName('term_id')} and ` +
          `${Colors.varName('name')} are as defined in the ` +
          `${Colors.url('https://developerdocs.instructure.com/services/canvas/sis/file.sis_csv#terms.csv')}. ` +
          `Defaults to environment variable ${Colors.varName('TERMS_CSV')}, ` +
          `if present.`,
        hint: Colors.quotedValue(`"path/to/terms.csv"`)
      },
      departmentAccountMapPath: {
        description:
          `Path to Department Account Map CSV file, must contain at least ` +
          `${Colors.varName('Department Id')} and ` +
          `${Colors.varName(`Canvas Account ID`)} columns which refer to a ` +
          `Blackbaud academic department ID value and a Canvas sub-account ID ` +
          `respectively. Defaults to environment variable ` +
          `${Colors.varName('DEPARTMENT_ACCOUNT_MAP_CSV')}, if present.`,
        hint: Colors.quotedValue(`"path/to/dept-acct-map.csv"`)
      },
      coursesWithDepartmentsPath: {
        description:
          `Path to Courses with Departments CSV file, must contain at least ` +
          `${Colors.varName('Course ID')} and ` +
          `${Colors.varName('Department ID')}, referring to Blackbaud course ` +
          `and academic department ID values. Defaults to environment variable ` +
          `${Colors.varName('COURSES_WITH_DEPARTMENTS_CSV')}, if present.`,
        hint: Colors.quotedValue(`"path/to/courses-dept.csv"`)
      },
      sisIdMapPath: {
        description:
          `Optional path to SIS ID Map CSV file, must contain at least ` +
          `${Colors.varName('AssociationId')} column and optionally either or ` +
          `both ${Colors.varName('prefix')} and ` +
          `${Colors.varName('SIS Account ID')} columns. Used for generating ` +
          `custom SIS course IDs and assigning courses to sub-account by ` +
          `department. The default prefix is ${Colors.value('cls')} and the ` +
          `departments are mapped at ` +
          `${Colors.optionArg('--departmentAccountMapPath')}. ` +
          `${Colors.varName('AccountId')} values are interpreted here: ` +
          `${Colors.url('https://github.com/groton-school/msar/blob/7bf001d100b25e5c9c5d23cf765f85cfb5d3c6a4/packages/datadirect/src/api/datadirect/SectionInfoView/Response.ts#L8-L21')}. ` +
          `Defaults to environment variable ${Colors.varName('SIS_ID_MAP_CSV')}, ` +
          `if present.`,
        hint: Colors.quotedValue(`"path/to/sis-id-map.csv"`)
      },
      canvasStudioIndex: {
        description: `Path to a JSON index hashing SHA1 file hashes of videos to Canvas Studio media IDs`,
        default: Preferences.canvasStudioIndex()
      },
      duplicates: {
        description: `Specify a duplicate course handling option`,
        hint: ['overwrite', 'update', 'reset', 'skip'].join('|'),
        validate: (value: unknown): boolean =>
          value !== undefined &&
          value !== null &&
          typeof value === 'string' &&
          ['overwrite', 'update', 'reset', 'skip'].includes(value)
      }
    },
    optList: {
      prefix: {
        description: `SIS course ID prefixes to include in import -- normally all courses would be included.`,
        hint: Colors.quotedValue(`"cls"`)
      },
      groupId: {
        description: `Blackbaud ${Colors.varName('Group ID')} for specific courses to import.`,
        hint: Colors.value('12345678')
      }
    },
    num: {
      skipTo: {
        description: `Skip forward to a specific Group ID in the snapshot index`,
        default: skipTo
      }
    }
  };
}

export async function init(args: Plugin.ExpectedArguments<typeof options>) {
  const snapshotPath = Positionals.get('snapshotPath');
  const {
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
      sisIdMapPath = await Env.get({ key: 'SIS_ID_MAP_CSV' }),
      ...values
    }
  } = args;
  Canvas.plugin.configure({ reason: 'canvas-import' });
  CanvasStudio.plugin.configure({ reason: 'canvas-import' });
  configure({
    blackbaudInstanceId,
    canvasInstanceUrl,
    termsPath,
    departmentAccountMapPath,
    coursesWithDepartmentsPath,
    sisIdMapPath,
    snapshotPath,
    ...values
  });
}

export async function run() {
  if (!(await Canvas.plugin.client.isAuthorized())) {
    await Canvas.plugin.client.authorize();
  }
  if (!(await CanvasStudio.plugin.client.isAuthorized())) {
    await CanvasStudio.plugin.client.authorize();
  }
  Log.info(
    `${Workspace.CanvasStudio.Hashes.length()} videos already indexed on Canvas Studio`
  );

  const spinner = ora(`Loading ${Colors.url(Snapshot.path())}`).start();
  let snapshots: Imported.Multiple.Data = [];
  const users: Record<Canvas.Users.User['sis_user_id'], Canvas.Users.User> = {};
  try {
    const file = JSON.parse(fs.readFileSync(Snapshot.path(), 'utf8'));
    if (Array.isArray(file)) {
      snapshots = file;
    } else {
      snapshots = [file];
    }
    if (!Array.isArray(snapshots)) {
      throw new Error(`Error loading data`);
    }
    Output.configure({
      outputPath: await Output.avoidOverwrite(
        Output.filePathFromOutputPath(
          Output.outputPath() !== Root.path()
            ? Output.outputPath()
            : path.dirname(Snapshot.path()),
          'canvas-import.json'
        )
      )
    });
    spinner.succeed(
      `Loaded ${snapshots.length} section snapshot${snapshots.length > 1 ? 's' : ''}`
    );
  } catch (error) {
    spinner.fail(Colors.error((error as Error).message));
  }

  let skipped: typeof snapshots = [];
  let remaining: typeof snapshots = [];
  if (skipTo !== undefined) {
    const i = snapshots.findIndex((snapshot) => snapshot.GroupId === skipTo);
    if (i >= 0) {
      skipped = snapshots.slice(0, i);
      snapshots = snapshots.slice(i);
    }
  }

  function writeIndex(silent = true) {
    Output.writeJSON(
      Output.outputPath(),
      [...skipped, ...snapshots, ...remaining],
      {
        overwrite: true,
        silent
      }
    );
  }

  const errors = [];
  const errorFilePath = path.join(
    path.dirname(Output.outputPath()),
    path.basename(Output.outputPath(), path.extname(Output.outputPath())) +
      '-errors.json'
  );

  for (const groupId of Preferences.groupIds() || [null]) {
    if (groupId !== null) {
      remaining = snapshots;
      snapshots = [];
      const i = remaining.findIndex(
        (section) => `${section.GroupId}` === groupId
      );
      if (i >= 0) {
        skipped = [...skipped, ...remaining.slice(0, i)];
        snapshots = remaining.slice(i, i + 1);
        remaining = remaining.slice(i + 1);
      }
    }
    for (let section of snapshots) {
      if (!Preferences.skipTeacherless() || section.SectionInfo?.TeacherId) {
        if (
          section.SectionInfo?.canvas?.instance_url &&
          typeof section.SectionInfo.canvas.instance_url === 'string'
        ) {
          configure({
            canvasIssuer:
              section.SectionInfo.canvas.instance_url ||
              Canvas.client().instance_url ||
              (await Env.get({ key: 'CANVAS_ISSUER' })) ||
              (await input({
                message: `What is the hostname for your Canvas instance?`,
                validate: (value) => !!Validators.isHostname({})(value),
                transformer: (hostname: string) => `https://${hostname}`
              }))
          });
        }

        const sis_course_id = OneRoster.sis_course_id(section);
        const match = sis_course_id.match(/^([^-]+)-/);
        if (
          !Preferences.prefixes() ||
          (match && Preferences.prefixes()?.includes(match[1]))
        ) {
          let course: Canvas.Courses.Course | undefined = undefined;
          try {
            course = await Canvas.v1.Courses.get({
              path: {
                id: `sis_course_id:${sis_course_id}`
              },
              query: { include: ['term'] }
            });
          } catch (e) {
            Log.debug(e as object);
          }
          if (course) {
            if (
              (
                await Canvas.v1.Courses.Assignments.list({
                  path: { course_id: course.id }
                })
              ).length > 0 ||
              (
                await Canvas.v1.Courses.Pages.list({
                  path: { course_id: course.id }
                })
              ).length > 0
            ) {
              log(course, 'Already exists in Canvas.');
              course = await handleDuplicateCourse({ course, section });
            }
          } else {
            const account_id = (await OneRoster.account_id(section)).toString();
            course = await Canvas.v1.Accounts.Courses.create({
              path: { account_id },
              body: {
                ...Snapshot.Section.toCanvasArgs(section),
                'course[term_id]': (await Workspace.getTermId()).toString()
              }
            });
            log(
              course,
              `Course created in sub-account ${Colors.value(await OneRoster.accountName(account_id))}`
            );
          }
          if (course) {
            const sis_term_id = OneRoster.sis_term_id(section);
            const prevTermId =
              course.term?.id ||
              (sis_term_id ? `sis_term_id:${sis_term_id}` : undefined);
            const prevTermName =
              course.term?.name ||
              (sis_term_id ? OneRoster.termName(sis_term_id) : undefined);
            try {
              await Canvas.v1.Courses.update({
                path: { id: course.id },
                body: {
                  'course[term_id]': (await Workspace.getTermId()).toString()
                }
              });
              log(course, `Temporarily moved to workspace term`);
              const spinner = ora('  Calculating file hashes').start();
              section = (await Snapshot.Files.Hashes.calculate(
                section as JSONObject
              )) as Imported.Multiple.Item;
              spinner.succeed('  Calculated file hashes');
              writeIndex();

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
              let user: Canvas.Users.User | undefined = undefined;
              if (section.SectionInfo?.TeacherId === null) {
                log(course, `No teacher in snapshot`, 'warning');
              } else {
                const sis_user_id = OneRoster.sis_user_id(section);
                user = users[sis_user_id];
                if (!user) {
                  try {
                    user = await Canvas.v1.Users.show_user_details({
                      path: { id: `sis_user_id:${sis_user_id}` }
                    });
                  } catch (_) {
                    user = await Canvas.v1.Accounts.Users.create({
                      path: { account_id: 1 },
                      body: {
                        'user[name]': section.SectionInfo?.Teacher,
                        'pseudonym[sis_user_id]': sis_user_id,
                        'pseudonym[unique_id]': sis_user_id,
                        enable_sis_reactivation: true,
                        'pseudonym[send_confirmation]': false
                      }
                    });
                    await Canvas.v1.Users.update({
                      path: { id: users[sis_user_id].id },
                      body: { 'user[event]': 'suspend' }
                    });
                    log(
                      course,
                      `Added ${Colors.value(users[sis_user_id].name)} as a suspended user`
                    );
                  }
                  users[sis_user_id] = user;
                }
                await Canvas.v1.Courses.Enrollments.enroll_user_courses({
                  path: { course_id: course.id.toString() },
                  body: {
                    'enrollment[user_id]': `sis_user_id:${sis_user_id}`,
                    'enrollment[type]': 'TeacherEnrollment',
                    'enrollment[enrollment_state]': 'active'
                  }
                });
                log(course, `Enrolled ${Colors.value(user.name)} as teacher`);
              }

              if (Preferences.assignments()) {
                await importAssignments({ user, course, section });
              }

              if (Preferences.bulletinBoard()) {
                await importBulletinBoard({ course, section });
              }

              if (Preferences.topics() && section.Topics) {
                await importTopics({ course, section });
              }

              if (prevTermId && prevTermName) {
                await Canvas.v1.Courses.update({
                  path: { id: course.id.toString() },
                  body: {
                    'course[term_id]': prevTermId
                  }
                });
                log(course, `Moved to term ${Colors.value(prevTermName)}`);
              } else {
                log(
                  course,
                  `Could not be moved out of the ${Colors.path('Import Workspace')} term`,
                  'warning'
                );
              }

              if (Preferences.bulletinBoard()) {
                await Canvas.v1.Courses.update({
                  path: { id: course.id.toString() },
                  body: { 'course[default_view]': 'wiki' }
                });
                log(course, `Set front page to bulletin board page`);
              }

              log(
                course,
                Colors.url(
                  path.join(
                    Canvas.client().instance_url,
                    'courses',
                    course.id.toString()
                  )
                )
              );
            } catch (error) {
              if (Preferences.ignoreErrors()) {
                if (Error.isError(error)) {
                  log(course, error.message, 'error');
                  errors.push({
                    course,
                    snapshot: section,
                    error: {
                      name: error.name,
                      message: error.message,
                      cause: error.cause,
                      stack: error.stack
                    }
                  });
                  Output.writeJSON(errorFilePath, errors, { overwrite: true });
                }
              } else {
                throw error;
              }
            }
            writeIndex();
          }
        } else {
          Log.info(
            `Skipping non-matching section ${Colors.value(section.SectionInfo?.GroupName)} (${sis_course_id})`
          );
        }
      } else {
        Log.info(
          `Skipping teacherless section ${Colors.value(section.SectionInfo?.GroupName)}`
        );
      }
    }
  }
  writeIndex(false);
}
