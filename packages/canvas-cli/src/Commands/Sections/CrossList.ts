import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import * as Plugin from '@qui-cli/plugin';
import open from 'open';
import ora from 'ora';
import queryString from 'query-string';

export type Configuration = Plugin.Configuration & {
  sections: string[];
  course: string;
  renamePattern?: RegExp;
  renameReplace?: string;
};

const config: Partial<Configuration> = {
  renamePattern: /^(.+) - \d+ \([A-Z]{1,2} ?.*\)( - .*)$/,
  renameReplace: '$1$2'
};

export function configure(proposal: Partial<Configuration> = {}) {
  for (const key in proposal) {
    if (proposal[key] !== undefined) {
      config[key] = proposal[key];
    }
  }
}

export function options() {
  return {
    man: [{ level: 1, text: 'Cross-List Options' }],
    optList: {
      section: {
        description: `Canvas Section IDs or SIS IDs (if SIS ID is numeric, prefix with ${Colors.quotedValue('"sis_section_id:"')}) of sections ${Colors.keyword('or')} SIS ID of single-section course prefixed with ${Colors.quotedValue('"sis_course_id:"')} to be cross-listed`,
        default: config.sections
      }
    },
    opt: {
      course: {
        description: `Canvas Course ID or SIS IDs (if SIS is numeric, prefix with ${Colors.quotedValue('"sis_course_id:"')}) of course in which sections are to be cross-listed`
      },
      renamePattern: {
        description: `Regex pattern to match ${Colors.optionArg('to')} course name for renaming`,
        default: config.renamePattern?.toString().replace(/^\/(.*)\/$/, '$1')
      },
      renameReplace: {
        description: `Replacement for ${Colors.optionArg('to')} course name; required if ${Colors.optionArg('renamePattern')} is defined`,
        default: config.renameReplace
      }
    }
  };
}

export function init({
  values: { renamePattern: pattern, section: sections, ...rest }
}: Plugin.ExpectedArguments<typeof options>) {
  configure({
    renamePattern: pattern ? new RegExp(pattern) : undefined,
    sections,
    ...rest
  });
}

function validate(config: Partial<Configuration>): config is Configuration {
  const { sections: from, course: to, renamePattern, renameReplace } = config;
  if (!!from && !!to && (!renamePattern || !!renameReplace)) {
    return true;
  }
  throw new Error('Insufficient configuration', { cause: config });
}

export async function run() {
  if (validate(config)) {
    const course = await Canvas.v1.Courses.get({
      path: {
        id: /^(\d+)|(sis_course_id:.*)$/.test(config.course)
          ? config.course
          : `sis_course_id:${config.course}`
      }
    });
    const spinner = ora(`Retrieving course ID ${Colors.value(config.id)}`);
    if (course) {
      spinner.succeed(`Retrieved course ${Colors.value(course.name)}`);
      const sections: Canvas.Sections.Section[] = [];
      for (let id of config.sections) {
        spinner.start(`Retrieving section ID ${Colors.value(id)}`);
        if (id.startsWith('sis_course_id:')) {
          spinner.text = `Retrieving course ID ${Colors.value(id)}'s sections`;
          const course_sections = await Canvas.v1.Courses.Sections.list({
            path: { course_id: id }
          });
          if (course_sections.length === 1) {
            sections.push(course_sections[0]);
            spinner.succeed(
              `Retrieved section ${Colors.value(course_sections[0].name)}`
            );
          } else if (course_sections.length === 0) {
            spinner.fail(
              `No sections retrieved for course ID ${Colors.value(id)}`
            );
          } else {
            spinner.fail(
              `Too many (${course_sections.length}) sections retrieved for course ID ${Colors.value(id)}`
            );
          }
        } else {
          if (/\D+/.test(id) && !id.startsWith('sis_section_id:')) {
            id = `sis_section_id:${id}`;
            spinner.text = `Retrieving section ID ${Colors.value(id)}`;
          }
          const section = await Canvas.v1.Sections.get({ path: { id } });
          if (section) {
            sections.push(section);
            spinner.succeed(`Retrieved section ${Colors.value(section.name)}`);
          } else {
            spinner.fail(`No sections retrieved for ID ${Colors.value(id)}`);
          }
        }
      }
      let crosslisted: Canvas.Sections.Section[] = [];
      for (const section of sections) {
        spinner.start(
          `Cross-listing ${Colors.value(
            section.name
          )} to ${Colors.value(course.name)}`
        );
        try {
          await Canvas.v1.Sections.Crosslist.cross_list_section({
            path: { id: section.id, new_course_id: course.id }
          });
          crosslisted.push(section);
          spinner.succeed(
            `Cross-listed ${Colors.value(section.name)} to ${Colors.value(course.name)}`
          );
        } catch (error) {
          spinner.fail(
            `Could not cross-list ${Colors.value(section.name)} to ${Colors.value(course.name)}: ${Colors.error(error)}`
          );
        }
      }

      if (config.renamePattern && config.renameReplace) {
        spinner.start(`Renaming ${Colors.value(course.name)}`);
        const name = course.name.replace(
          config.renamePattern,
          config.renameReplace
        );
        spinner.text = `${spinner.text} to ${Colors.value(name)}`;
        try {
          await Canvas.v1.Courses.update({
            path: { id: course.id },
            body: { 'course[name]': name, 'course[course_code]': name }
          });
          course.name = name;
          course.course_code = name;
          spinner.succeed(spinner.text.replace('Renaming', 'Renamed'));
        } catch (error) {
          spinner.fail(
            `${spinner.text.replace('Renaming', 'Could not rename')}: ${Colors.error(error)}`
          );
        }
      }

      spinner.start(`Sorting ${Colors.value(course.name)} sections`);
      const order: Canvas.Sections.Section['id'][] = [];
      try {
        const actual = await Canvas.v1.Courses.Sections.list({
          path: { course_id: course.id }
        });
        actual
          .sort((a, b) => (a.name < b.name ? -1 : 1))
          .forEach((section) => order.push(section.id));
        crosslisted = crosslisted.sort((a, b) =>
          order.indexOf(a.id) < order.indexOf(b.id) ? -1 : 1
        );
        spinner.succeed(`Sorted ${Colors.value(course.name)} sections`);
      } catch (error) {
        spinner.fail(
          `Could not retrieve ${Colors.value(course.name)} section: ${Colors.error(error)}`
        );
      }

      spinner.start(`Retrieving external tool configurations`);
      const tools = await Canvas.v1.Courses.ExternalTools.list({
        path: { course_id: course.id }
      });
      if (tools) {
        spinner.text = `Retrieved ${tools.length} external tools for course`;
        const toolsBySection: Record<
          Canvas.Sections.Section['course_id'],
          Canvas.ExternalTools.ContextExternalTool[]
        > = {};
        for (const section of crosslisted) {
          const sectionTools = await Canvas.v1.Courses.ExternalTools.list({
            path: { course_id: section.course_id }
          });
          if (sectionTools && sectionTools.length) {
            toolsBySection[section.course_id] = sectionTools;
          }
        }
        if (Object.keys(toolsBySection).length) {
          spinner.succeed(
            `${spinner.text} and for ${Object.keys(toolsBySection).length} sections`
          );
          for (const tool of tools) {
            if (tool.name === 'Major Commitments') {
              spinner.start(
                `Computing ${Colors.command('Major Commitments')} launch URL`
              );
              const [, base, internal_class_id_path] =
                tool.url.match(/^(.+\/)(\d+_?)+/) || [];
              let internal_class_ids = internal_class_id_path.split('_');
              for (const section of crosslisted) {
                const id = toolsBySection[section.course_id]
                  .filter((tool) => tool.name === 'Major Commitments')
                  .reduce((id_path: string | undefined, tool) => {
                    if (!id_path) {
                      return tool.url.replace(/^.*\/(\d+)$/, '$1');
                    }
                    return id_path;
                  }, undefined);
                if (id) {
                  const i = order.indexOf(section.id);
                  internal_class_ids = [
                    ...internal_class_ids.slice(0, i),
                    id,
                    ...internal_class_ids.slice(i)
                  ];
                }
              }
              await Canvas.v1.Courses.ExternalTools.update({
                path: { course_id: course.id, external_tool_id: tool.id },
                // @ts-expect-error 2353 API spec does not include body docs
                body: { url: `${base}${internal_class_ids.join('_')}` }
              });
              spinner.succeed();
            } else if (tool.name === 'Learning Plans') {
              spinner.start(
                `Computing ${Colors.command('Learning Plans')} launch URL`
              );
              const [, base, internal_class_id_path] =
                tool.url.match(/^(.+\/)(\d+_?)+/) || [];
              let internal_class_ids = internal_class_id_path.split('_');
              for (const section of crosslisted) {
                const id = toolsBySection[section.course_id]
                  .filter((tool) => tool.name === 'Learning Plans')
                  .reduce((id_path: string | undefined, tool) => {
                    if (!id_path) {
                      return tool.url.replace(/^.*\/(\d+)$/, '$1');
                    }
                    return id_path;
                  }, undefined);
                if (id) {
                  const i = order.indexOf(section.id);
                  internal_class_ids = [
                    ...internal_class_ids.slice(0, i),
                    id,
                    ...internal_class_ids.slice(i)
                  ];
                }
              }
              await Canvas.v1.Courses.ExternalTools.update({
                path: { course_id: course.id, external_tool_id: tool.id },
                // @ts-expect-error 2353 API spec does not include body docs
                body: { url: `${base}${internal_class_ids.join('_')}` }
              });
              spinner.succeed();
            } else if (tool.name === 'Attendance') {
              spinner.start(
                `Computing ${Colors.command('Attendance')} launch URL`
              );
              const url = new URL(tool.url);
              const query = queryString.parse(url.search, {
                arrayFormat: 'bracket'
              }) as { id: string[]; caption: string[] };
              if (
                query.id &&
                Array.isArray(query.id) &&
                query.caption &&
                Array.isArray(query.caption)
              ) {
                for (const section of crosslisted) {
                  const sectionUrl = toolsBySection[section.course_id]
                    .filter((tool) => tool.name === 'Attendance')
                    .reduce(
                      (url: undefined | URL, tool) => url || new URL(tool.url),
                      undefined
                    );
                  if (sectionUrl) {
                    const {
                      id: [_id],
                      caption: [_caption]
                    } = queryString.parse(sectionUrl.search, {
                      arrayFormat: 'bracket'
                    }) as { id: string[]; caption: string[] };
                    if (_id && _caption) {
                      const i = order.indexOf(section.id);
                      query.id = [
                        ...query.id.slice(0, i),
                        _id,
                        ...query.id.slice(i)
                      ];
                      query.caption = [
                        ...query.caption.slice(0, i),
                        _caption,
                        ...query.caption.slice(i)
                      ];
                    }
                  }
                }
                url.search = queryString.stringify(query, {
                  arrayFormat: 'bracket'
                });
                await Canvas.v1.Courses.ExternalTools.update({
                  path: { course_id: course.id, external_tool_id: tool.id },
                  // @ts-expect-error 2353 API spec does not include body docs
                  body: { url: url.toString() }
                });
                spinner.succeed();
              } else {
                spinner.fail(
                  `${Colors.command('Attendance')} launch URL failed: ${Colors.error('could not identify id and caption')}`
                );
              }
            }
          }
          open(
            `${Canvas.plugin.client.instance_url}/courses/${course.id}/assignments`
          );
        } else {
          spinner.info(`${spinner.text} but no sections`);
        }
      } else {
        spinner.info(`No tools retrieved from ${Colors.value(course.name)}`);
      }
    } else {
      spinner.fail(
        `Could not retrieve course ID ${Colors.value(config.course)}`
      );
    }
  }
}
