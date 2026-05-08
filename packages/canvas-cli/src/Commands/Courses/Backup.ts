import { PathString } from '@battis/descriptive-types';
import { Canvas } from '@oauth2-cli/canvas';
import { Positionals } from '@qui-cli/core';
import * as Plugin from '@qui-cli/plugin';
import { Root } from '@qui-cli/root';
import fs from 'node:fs';
import path from 'node:path';
import ora from 'ora';

export type Configuration = Plugin.Configuration & {
  outputPath?: PathString;
  accountId?: number;
};

export const name = 'backup';

const config: Configuration = {
  outputPath: './',
  accountId: 1
};

Positionals.require({
  outputPath: {
    description: 'Path for output data'
  }
});
Positionals.allowOnlyNamedArgs();
Positionals.requireAtLeast(0);

export function configure(proposal: Configuration = {}) {
  for (const key in proposal) {
    if (proposal[key] !== undefined) {
      config[key] = proposal[key];
    }
  }
}

export function options(): Plugin.Options {
  return {
    man: [{ level: 1, text: 'Course Backup Options' }],
    num: {
      accountId: {
        description: 'Canvas ID of account to backup',
        default: config.accountId
      }
    }
  };
}

export function init({ values }: Plugin.ExpectedArguments<typeof options>) {
  const outputPath = Positionals.get('outputPath');
  configure({ outputPath, ...values });
}

export async function run() {
  if (!config.outputPath) {
    throw new Error();
  }
  const basePath = path.resolve(
    Root.path(),
    config.outputPath,
    `${new Date().toISOString().replaceAll(/[^a-z0-9-_ ]+/gi, '-')} Backup`
  );
  fs.mkdirSync(basePath, { recursive: true });
  for (const course of await Canvas.v1.Accounts.Courses.list({
    path: { account_id: 1 },
    query: { published: true, completed: false }
  })) {
    const spinner = ora(course.name).start();
    // @ts-expect-error 2559
    course['assignments'] = await Canvas.v1.Courses.Assignments.list({
      path: { course_id: course.id },
      query: {
        include: [
          'all_dates',
          'overrides',
          'assignment_visibility',
          'score_statistics'
        ]
      }
    });
    // @ts-expect-error 7053
    for (const assignment of course['assignments']) {
      assignment['submissions'] =
        await Canvas.v1.Courses.Assignments.Submissions.list({
          path: { course_id: course.id, assignment_id: assignment.id },
          query: {
            include: [
              'submission_comments',
              'submission_html_comments',
              'rubric_assessment',
              'read_status'
            ]
          }
        });
    }
    fs.writeFileSync(
      path.resolve(
        basePath,
        `${course.id} - ${course.name.replaceAll(/[^a-z0-9-_ ]+/gi, '')}.json`
      ),
      JSON.stringify(course)
    );
    spinner.succeed();
  }
}
