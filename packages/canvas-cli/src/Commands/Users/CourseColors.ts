import * as Colors from '@groton/colors';
import { Canvas } from '@oauth2-cli/canvas';
import { Log } from '@qui-cli/log';
import * as Plugin from '@qui-cli/plugin';
import chalk from 'chalk';
import path from 'node:path';
import ora, { Ora } from 'ora';

export type Configuration = Plugin.Configuration & {
  account_id?: string;
  term_id?: number;
  overwrite?: boolean;
};

export const name = 'course-colors';

let account_id: string | undefined = undefined;
let term_id: number | undefined = undefined;
let overwrite = false;

export function configure(config: Configuration = {}) {
  account_id = Plugin.hydrate(config.account_id, account_id);
  term_id = Plugin.hydrate(config.term_id, term_id);
  overwrite = Plugin.hydrate(config.overwrite, overwrite);
}

export function options(): Plugin.Options {
  return {
    man: [{ level: 1, text: 'Course colors options' }],
    flag: {
      overwrite: {
        description: 'Whether or not to overwrite existing colors',
        default: overwrite
      }
    },
    opt: {
      accountId: {
        description: `Canvas account ID to include`,
        default: '1'
      }
    },
    num: {
      termId: {
        description: `Canvas term ID to include`
      }
    }
  };
}

export function init(args: Plugin.ExpectedArguments<typeof options>) {
  const {
    values: { accountId: account_id, termId: term_id, ...values }
  } = args;
  Canvas.plugin.configure({
    reason: path.basename(import.meta.filename, '.js')
  });
  configure({
    account_id,
    term_id: term_id as unknown as number,
    ...values
  });
}

export async function run() {
  if (!account_id) {
    throw new Error(`accountId must be defined`);
  }
  if (!term_id) {
    throw new Error(`termId must be defined`);
  }

  // TODO /users/{id}/colors list return type
  type CustomColors = { custom_colors: Record<string, string> };

  const userCache: Record<Canvas.Users.User['id'], CustomColors> = {};

  function blockFrom(
    section: Canvas.Sections.Section,
    course: Canvas.Courses.Course
  ) {
    for (const source of [section.name, course.name, course.course_code]) {
      const blockMatches = course && /\(([A-Z]{1,2})[^)]*\)$/.exec(source);
      if (blockMatches && blockMatches.length >= 2) {
        return blockMatches[1];
      }
    }
    return undefined;
  }

  type SpinnerOptions = {
    course?: Canvas.Courses.Course;
    sections?: number;
    section?: Canvas.Sections.Section;
    checked?: number;
    hexcode?: string | false;
    applied?: number;
    overwritten?: number;
    error?: Error;
  };

  let currentCourseId: string | number | undefined = undefined;
  let currentSectionId: string | number | undefined = undefined;
  let spinner: Ora | undefined = undefined;

  function log({
    course,
    section,
    sections,
    checked,
    hexcode,
    applied,
    overwritten,
    error
  }: SpinnerOptions = {}) {
    function complete() {
      if (spinner) {
        if (/⛶/.test(spinner.text)) {
          spinner.info();
        } else if (/⛝/.test(spinner.text)) {
          spinner.warn();
        } else {
          spinner.succeed();
        }
      }
    }

    if (course) {
      if (course.id !== currentCourseId) {
        complete();
        spinner = ora(`□ ${course.name}`).start();
        currentCourseId = course.id;
      }
      if (spinner) {
        if (error) {
          spinner.fail();
          Log.error(error.message);
        } else {
          if (sections !== undefined) {
            if (sections === 0) {
              spinner.text = `${chalk.hex(Colors.NoColorOnBlack)(
                spinner.text.replace('□', '⛶')
              )} has no sections`;
            }
            if (section) {
              if (section.id !== currentSectionId) {
                if (sections > 1) {
                  if (spinner.text === `□ ${course.name}`) {
                    spinner.stop();
                    Log.info(`□ ${course.name}`);
                  } else {
                    complete();
                  }
                  spinner = ora(`  □ ${section.name}`).start();
                }
                currentSectionId = section.id;
              }
              if (spinner) {
                let text = spinner.text;
                if (hexcode != undefined && /□ .+$/.test(text)) {
                  if (hexcode === false) {
                    text = `${chalk.hex(Colors.NoColor)(text.replace('□', '⛝'))}`;
                  } else {
                    text = chalk.hex(hexcode)(text.replace('□', '■'));
                  }
                }
                if (checked !== undefined && applied !== undefined) {
                  if (/updated \d+\/\d+ users/.test(text)) {
                    text = text.replace(
                      /updated \d+\/\d+/,
                      `updated ${applied}/${checked}`
                    );
                  } else {
                    text = `${text} updated ${applied}/${checked} users`;
                  }
                }
                if (overwritten !== undefined && overwritten > 0) {
                  if (/\(overwriting \d+\)/.test(text)) {
                    text = text.replace(
                      /\(overwriting \d+\)/,
                      `(overwriting ${overwritten})`
                    );
                  } else {
                    text = `${text} (overwriting ${overwritten})`;
                  }
                }
                spinner.text = text;
              }
            }
          }
        }
      }
    } else {
      complete();
    }
  }

  const per_page = 100;
  const courses = await Canvas.v1.Accounts.Courses.list({
    pathParams: { account_id },
    searchParams: { enrollment_term_id: term_id, per_page }
  });

  for (const course of courses) {
    log({ course });
    const sections = await Canvas.v1.Courses.Sections.list({
      pathParams: { course_id: course.id },
      searchParams: { include: ['enrollments'] }
    });
    log({ course, sections: sections.length });
    for (const section of sections) {
      log({ course, sections: sections.length, section });
      const block = blockFrom(section, course);
      const asset_string = `course_${course.id}`;

      const hexcode =
        block && `${block}OnWhite` in Colors
          ? // @ts-expect-error 2538
            Colors[`${block}OnWhite`]
          : undefined;
      try {
        if (hexcode) {
          log({ course, sections: sections.length, section, hexcode });
          const enrollments = await Canvas.v1.Sections.Enrollments.list({
            pathParams: { section_id: section.id }
          });
          let applied = 0;
          let overwritten = 0;
          log({
            course,
            sections: sections.length,
            section,
            // @ts-expect-error 7053
            hexcode: Colors[`${block}OnBlack`],
            checked: enrollments.length,
            applied,
            overwritten
          });
          for (let i = 0; i < enrollments.length; i++) {
            if (!(enrollments[i].user_id in userCache)) {
              userCache[enrollments[i].user_id] =
                (await Canvas.v1.Users.Colors.list({
                  pathParams: { id: enrollments[i].user_id }
                })) as CustomColors;
            }
            if (
              (!userCache[enrollments[i].user_id].custom_colors[asset_string] ||
                overwrite) &&
              hexcode !==
                userCache[enrollments[i].user_id].custom_colors[asset_string]
            ) {
              await Canvas.v1.Users.Colors.update({
                pathParams: {
                  id: enrollments[i].user_id,
                  asset_string
                },
                params: { hexcode }
              });
              applied++;
              overwritten += userCache[enrollments[i].user_id].custom_colors[
                asset_string
              ]
                ? 1
                : 0;
              userCache[enrollments[i].user_id].custom_colors[asset_string] =
                hexcode;
            }
            log({
              course,
              sections: sections.length,
              section,
              // @ts-expect-error 7053
              hexcode: Colors[`${block}OnBlack`],
              checked: enrollments.length,
              applied,
              overwritten
            });
          }
        } else {
          log({ course, sections: sections.length, section, hexcode: false });
        }
      } catch (error) {
        if (Error.isError(error)) {
          log({ course, sections: sections.length, section, error });
        } else {
          throw new Error('Unknown error', { cause: error });
        }
      }
    }
  }
  log();
}
