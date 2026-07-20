import { PathString, URLString } from '@battis/descriptive-types';
import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import { Positionals } from '@qui-cli/core';
import { Log } from '@qui-cli/log';
import * as Plugin from '@qui-cli/plugin';
import { parse } from 'csv-parse/sync';
import fs from 'node:fs';
import path from 'node:path';
import ora from 'ora';

type LinkOptions = {
  course_id?: string;
  url?: URLString;
  title?: string;
  description?: string;
  adminOnly?: boolean;
  enable?: boolean;
  embed?: boolean;
};

export type Configuration = Plugin.Configuration & {
  pathToCsv?: PathString;
} & LinkOptions;

Positionals.require({
  pathToCsv: {
    description: `Path to a CSV file with columns matching the command line options`
  }
});
Positionals.allowOnlyNamedArgs();
Positionals.requireAtLeast(0);

const configTemplate = `<?xml version="1.0" encoding="UTF-8"?>
<cartridge_basiclti_link xmlns="http://www.imsglobal.org/xsd/imslticc_v1p0"
    xmlns:blti = "http://www.imsglobal.org/xsd/imsbasiclti_v1p0"
    xmlns:lticm ="http://www.imsglobal.org/xsd/imslticm_v1p0"
    xmlns:lticp ="http://www.imsglobal.org/xsd/imslticp_v1p0"
    xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation = "http://www.imsglobal.org/xsd/imslticc_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticc_v1p0.xsd
    http://www.imsglobal.org/xsd/imsbasiclti_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imsbasiclti_v1p0.xsd
    http://www.imsglobal.org/xsd/imslticm_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticm_v1p0.xsd
    http://www.imsglobal.org/xsd/imslticp_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticp_v1p0.xsd">
    <blti:launch_url>{{url}}</blti:launch_url>
    <blti:title>{{title}}</blti:title>
    <blti:description>{{description}}</blti:description>
    <blti:extensions platform="canvas.instructure.com">
      <lticm:property name="privacy_level">anonymous</lticm:property>
      <lticm:options name="course_navigation">
        <lticm:property name="visibility">{{visibility}}</lticm:property>
        <lticm:property name="enabled">{{enable}}</lticm:property>
        {{embed}}
      </lticm:options>
    </blti:extensions>
</cartridge_basiclti_link>`;

export const name = 'navigation';

const config: Configuration = {
  visibility: 'members',
  enabled: true,
  embed: true
};

export function configure(proposal: Configuration = {}) {
  for (const key in proposal) {
    if (proposal[key] !== undefined) {
      config[key] = proposal[key];
    }
  }
}

export function options(): Plugin.Options {
  return {
    man: [{ level: 1, text: 'Course Navigation Options' }],
    opt: {
      courseId: {
        description: `Canvas course ID or SIS Course ID for the course to be updated (if SIS ID is numeric, format it as ${Colors.quotedValue(`"sis_course_id:1234"`)})`,
        short: 'i',
        default: config.course_id
      },
      url: {
        description: `URL to add to course navigation`,
        hint: Colors.quotedValue('https://example.com'),
        short: 'u',
        default: config.url
      },
      title: {
        description: `Title of link to display in course navigation`,
        short: 't',
        default: config.title
      },
      description: {
        description: `Description of link to display in App Configuration`,
        short: 'd',
        default: config.description
      }
    },
    flag: {
      adminOnly: {
        description: `The link is viewable only by course admins`,
        short: 'a',
        default: config.adminOnly
      },
      enable: {
        description: `The link is automatically enabled in course navigation`,
        short: 'e',
        default: config.enable
      },
      embed: {
        description: `The link launches embedded in an iframe in Canvas`,
        short: 'm',
        default: config.embed
      }
    }
  };
}

export function init({
  values: { courseId: course_id, ...rest }
}: Plugin.ExpectedArguments<typeof options>) {
  configure({ pathToCsv: Positionals.get('pathToCsv'), course_id, ...rest });
}

export async function run() {
  const configs: LinkOptions[] = [];
  if (config.id) {
    configs.push(config);
  }
  if (config.pathToCsv) {
    configs.push(
      ...parse<LinkOptions>(
        fs.readFileSync(path.resolve(process.cwd(), config.pathToCsv), 'utf8'),
        {
          columns: true,
          cast: (value, context) => {
            switch (context.column) {
              case 'enable':
              case 'embed':
              case 'adminOnly':
                switch (value.toLowerCase()) {
                  case 'true':
                  case 'yes':
                  case '1':
                    return true;
                  default:
                    return false;
                }
              default:
                return value;
            }
          }
        }
      )
    );
  }
  for (let i = 0; i < configs.length; i++) {
    {
      Log.debug(Log.syntaxColor({ row: i + 1, configuration: configs[i] }));
      let { course_id } = configs[i];
      const { url, title, description, adminOnly, enable, embed } = configs[i];
      const spinner = ora(`Course ${Colors.value(course_id)}`).start();
      if (course_id) {
        spinner.text = `Course ID ${course_id}`;
        if (!/^(\d+|sis_course_id:.+)$/.test(course_id)) {
          course_id = `sis_course_id:${course_id}`;
        }
        spinner.text = `Course ID ${Colors.value(course_id)}`;
        let course: Canvas.Courses.Course;
        try {
          course = await Canvas.v1.Courses.get({ path: { id: course_id } });
        } catch (_) {
          spinner.fail(
            Colors.error(`${spinner.text} at row ${i + 1} could not be found`)
          );
          continue;
        }
        spinner.text = `${Colors.value(course.name)} (${Colors.url(`${Canvas.plugin.client.credentials.issuer}/courses/${course.id}`)})`;
        if (!url) {
          spinner.fail(
            `Configuration for ${spinner.text} at row ${i + 1} is missing a ${Colors.varName('url')}`
          );
          return;
        }
        if (!title) {
          spinner.fail(
            `Configuration for ${spinner.text} at row ${i + 1} is missing a ${Colors.varName('title')}`
          );
          return;
        }
        const config_xml = configTemplate
          .replace('{{title}}', title)
          .replace('{{description}}', description || '')
          .replace('{{url}}', url)
          .replace('{{visibility}}', adminOnly ? 'admins' : 'members')
          .replace('{{enable}}', (!!enable).toString())
          .replace(
            '{{embed}}',
            embed
              ? ''
              : `<lticm:property name="windowTarget">_blank</lticm:property>`
          );
        Log.debug(
          `{  "config_xml": ${Colors.quotedValue(`"${config_xml}"`)}\n}`
        );
        let tool;
        try {
          tool = await Canvas.v1.Courses.ExternalTools.create({
            path: { course_id },
            body: {
              name: title,
              config_type: 'by_xml',
              config_xml,
              not_selectable: true
            }
          });
          Log.debug({ tool });
          spinner.succeed(
            `${Colors.command(tool.name)} installed in ${spinner.text}`
          );
        } catch (error) {
          spinner.fail(
            `Installation failed in ${spinner.text}: ${Colors.error(error)}`
          );
          return;
        }
      } else {
        spinner.fail(Colors.error(`Row ${i + 1} is missing a course ID`));
        return;
      }
    }
  }
}
