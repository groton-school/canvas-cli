import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import { Log } from '@qui-cli/log';
import * as Plugin from '@qui-cli/plugin';
import { kebabCase, snakeCase } from 'change-case';
import ora from 'ora';

const availableEnrollmentTypes = [
  'student',
  'teacher',
  'ta',
  'observer',
  'designer'
];

const availableCategories = [
  'announcement',
  'due_date',
  'course_content',
  'grading_policies',
  'grading',
  'calendar',
  'invitation',
  'discussion',
  'late_grading',
  'submission_comment',
  'summaries',
  'registration',
  'other',
  'reminder',
  'membership_update',
  'discussionentry',
  'all_submissions',
  'conversation_message',
  'added_to_conversation',
  'alert',
  'student_appointment_signups',
  'appointment_cancelations',
  'appointment_availability',
  'appointment_signups',
  'files',
  'migration',
  'announcement_created_by_you',
  'conversation_created',
  'recording_ready',
  'blueprint',
  'account_notification',
  'content_link_error',
  'discussionmention',
  'reportedreply'
];

export type Configuration = Plugin.Configuration & {
  account_id?: string;
  enrollment_types?: string[] | undefined;
  categories?: string[];
};

export const name = import.meta.filename;

let account_id: string | undefined = undefined;
let enrollment_types = ['observer'];
let categories = [
  'announcement',
  'due_date',
  'course_content',
  'grading_policies',
  'grading',
  'discussion',
  'late_grading',
  'submission_comment',
  'summaries',
  'discussionentry',
  'all_submissions'
];

export function configure(config: Configuration = {}) {
  account_id = Plugin.hydrate(config.account_id, account_id);
  enrollment_types = Plugin.hydrate(config.enrollment_types, enrollment_types);
  categories = Plugin.hydrate(config.categories, categories);
}

export function options(): Plugin.Options {
  return {
    opt: {
      accountId: {
        description: `Account ID of the account containing the users for whom notification preferences should be updated (default: )`
      }
    },
    optList: {
      enrollmentType: {
        description: `Filter for a particular type or types of enrollment (default: ${enrollment_types
          .map((t) => Colors.quotedValue(`"${t}"`))
          .join(', ')}; valid options are ${availableEnrollmentTypes
          .map((t) => Colors.quotedValue(`"${t}"`))
          .join(', ')})`,
        default: enrollment_types
      }
    },
    flag: availableCategories.reduce(
      (flags, category) => {
        const safe = kebabCase(category);
        const disable = categories.includes(category);
        flags![safe] = {
          description: `Disable ${Colors.value(category)} announcements category (default: ${
            disable
              ? `disable these notifications, ${Colors.value(`--no-${safe}`)} to leave current notification setting unchanged for users`
              : 'leave current notification settings unchanged for users'
          })`,
          default: disable
        };
        return flags;
      },
      {} as Plugin.Options['flag']
    )
  };
}

export function init({
  values: { accountId, enrollmentType, ...others }
}: Plugin.ExpectedArguments<typeof options>) {
  configure({
    account_id: accountId,
    enrollment_types: enrollmentType,
    categories: Object.keys(others).reduce((list, key) => {
      if (others[key]) {
        const category = snakeCase(key);
        if (availableCategories.includes(category)) {
          list.push(snakeCase(key));
        }
      }
      return list;
    }, [] as string[])
  });
}

export async function run() {
  if (!account_id) {
    throw new Error(`No ${Colors.value('accountId')} selected`);
  }
  if (enrollment_types.length === 0) {
    throw new Error(`No ${Colors.value('enrollmentType')} selected`);
  }
  for (const enrollment_type of enrollment_types) {
    Log.info(
      `Disable ${categories.map((c) => Colors.value(c)).join(', ')} notifications for ${Colors.command(enrollment_type)} users:`
    );
    try {
      const users = await Canvas.v1.Accounts.Users.list({
        pathParams: { account_id },
        searchParams: { enrollment_type }
      });
      for (const user of users) {
        const spinner = ora().start(user.name);
        try {
          const channels = await Canvas.v1.Users.CommunicationChannels.list({
            pathParams: { user_id: user.id }
          });
          for (const channel of channels) {
            for (const category of categories) {
              (await Canvas.v1.Users.Self.CommunicationChannels.NotificationPreferenceCategories.update(
                {
                  pathParams: {
                    communication_channel_id: channel.id,
                    category
                  },
                  params: {
                    'notification_preferences[frequency]': 'never',
                    as_user_id: user.id
                  }
                }
              )) as unknown as object;
            }
          }
          spinner.succeed();
        } catch (error) {
          spinner.fail(Colors.error((error as Error).message));
        }
      }
    } catch (error) {
      Log.error({ error });
    }
  }
}
