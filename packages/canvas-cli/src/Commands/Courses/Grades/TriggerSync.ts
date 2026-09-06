import fs from 'node:fs';
import path from 'node:path';
import { DateTimeString, PathString } from '@battis/descriptive-types';
import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import * as Plugin from '@qui-cli/plugin';
import ora from 'ora';

export type Configuration = Plugin.Configuration & {
  account?: number;
  due?: DateTimeString;
  history?: PathString;
};

type HistoryEntry = {
  timestamp: DateTimeString;
  assignment: Canvas.Assignments.Assignment;
  student: Canvas.Users.User;
};

const config: Configuration = { account: 1 };

export function configure(proposal: Configuration = {}) {
  for (const key in proposal) {
    if (proposal[key] !== undefined) {
      config[key] = proposal[key];
    }
  }
}

export function options() {
  return {
    man: [
      { level: 1, text: 'Trigger Sync Options' },
      {
        text: 'Create fake grade activity in active courses to trigger the overnight grade sync.'
      }
    ],
    num: {
      account: {
        description: 'Canvas Account ID to search for active courses',
        default: config.account
      }
    },
    opt: {
      due: {
        description: 'When the trigger assignment should be due',
        default: config.due
      },
      history: {
        description: `Path to history file to prevent re-triggering already triggered courses`,
        env: 'GRADE_SYNC_TRIGGER_HISTORY',
        default: config.history
      }
    }
  };
}

export function init({ values }: Plugin.ExpectedArguments<typeof options>) {
  configure(values);
}

export async function run() {
  if (!config.account) {
    throw new Error(`${Colors.optionArg('account')} must be defined`);
  }
  if (!config.due) {
    throw new Error(`${Colors.optionArg('due')} must be defined`);
  }

  const spinner = ora();

  let historyPath: string | undefined = undefined;
  let history: Record<Canvas.Courses.Course['id'], HistoryEntry> = {};
  if (config.history) {
    historyPath = path.resolve(process.cwd(), config.history);
    spinner.start(`Loading history from ${Colors.path(historyPath)}`);
    if (fs.existsSync(historyPath)) {
      history = JSON.parse(fs.readFileSync(historyPath, 'utf-8'));
      spinner.succeed(
        `${Object.keys(history).length} prior history entries loaded`
      );
    } else {
      spinner.info('No prior history found');
    }
  }

  spinner.start('Loading active courses');
  for (const course of await Canvas.v1.Accounts.Courses.list({
    path: { account_id: config.account },
    query: {
      published: true,
      completed: false,
      hide_enrollmentless_courses: true,
      include: ['enrollments']
    }
  })) {
    spinner.start(course.name);
    if (course.id in history) {
      spinner.info(
        `${Colors.value(course.name)} previously triggered ${history[course.id].timestamp}`
      );
    } else {
      const enrollment = (
        await Canvas.v1.Courses.Users.list({
          path: { course_id: course.id },
          query: { enrollment_type: ['student'] }
        })
      ).shift();
      if (enrollment) {
        const trigger_assignment = await Canvas.v1.Courses.Assignments.create({
          path: { course_id: course.id },
          body: {
            'assignment[name]': 'Grade Sync Trigger',
            'assignment[notify_of_update]': false,
            'assignment[submission_types]': ['none'],
            'assignment[due_at]': config.due,
            'assignment[points_possible]': 10,
            'assignment[published]': true
          }
        });
        spinner.text = `${spinner.text} / Assignment ${trigger_assignment.id}`;
        spinner.text = `${spinner.text} / ${enrollment.name}`;
        await Canvas.v1.Courses.Assignments.Submissions.grade_or_comment_on_submission_courses(
          {
            path: {
              course_id: course.id,
              assignment_id: trigger_assignment.id,
              user_id: enrollment?.id
            },
            body: { 'submission[posted_grade]': '10' }
          }
        );
        await Canvas.v1.Courses.Assignments.delete_assignment({
          path: { course_id: course.id, id: trigger_assignment.id }
        });
        history[course.id] = {
          timestamp: new Date().toISOString(),
          assignment: trigger_assignment,
          student: enrollment
        };
        if (historyPath) {
          fs.writeFileSync(historyPath, JSON.stringify(history));
        }
        spinner.succeed();
      } else {
        spinner.fail();
      }
    }
  }

  if (historyPath) {
    spinner.succeed(`History written to ${Colors.path(historyPath)}`);
  }
}
