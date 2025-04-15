import { ApolloClient, gql, InMemoryCache, useMutation } from '@apollo/client';
import '@battis/qui-cli.env';
import { Log } from '@battis/qui-cli.log';
import * as Plugin from '@battis/qui-cli.plugin';
import * as Canvas from '@groton/canvas-cli.api';
import path from 'node:path';

export type Configuration = Plugin.Configuration & {
  account_id?: string;
};

export const name = '@groton/canvas-notifications-cli';
export const src = path.resolve(import.meta.dirname, '../..');

let account_id: string | undefined = undefined;

export function configure(config: Configuration = {}) {
  account_id = Plugin.hydrate(config.account_id, account_id);
}

export function options(): Plugin.Options {
  return {
    opt: {
      accountId: {
        description: `Canvas account ID to include`,
        default: '1'
      }
    }
  };
}

export function init(args: Plugin.ExpectedArguments<typeof options>) {
  const {
    values: { accountId: account_id, ...values }
  } = args;
  configure({
    account_id,
    ...values
  });
}

export async function run() {
  if (!account_id) {
    throw new Error('account_id must be defined');
  }

  const graphql = new ApolloClient({
    uri: `${Canvas.client().instance_url}/api/graphql`,
    cache: new InMemoryCache()
  });
  const [UpdateCourseNotificationPreferences] = useMutation(gql`
    mutation DisableCourseNotifications($courseId: ID!) {
      updateNotificationPreferences(
        input: {
          contextType: Course
          courseId: $courseId
          isPolicyOverride: true
          enabled: false
        }
      ) {
        user {
          _id
          notificationPreferencesEnabled(
            contextType: Course
            courseId: $courseId
          )
          notificationPreferences {
            channels {
              _id
              path
              pathType
              notificationPolicyOverrides(
                contextType: Course
                courseId: $courseId
              ) {
                notification {
                  _id
                  category
                  categoryDisplayName
                  name
                  __typename
                }
                __typename
              }
              __typename
            }
            __typename
          }
          __typename
        }
        errors {
          message
          __typename
        }
        __typename
      }
    }
  `);

  const per_page = 100;
  for (const user of await Canvas.v1.Accounts.Users.list({
    pathParams: { account_id },
    searchParams: { per_page }
  })) {
    for (const enrollment of await Canvas.v1.Users.Enrollments.list({
      pathParams: { user_id: user.id.toString() },
      searchParams: { state: ['active'], per_page }
    })) {
      if (enrollment.type === 'ObserverEnrollment') {
        const response = await UpdateCourseNotificationPreferences({
          variables: {
            courseId: enrollment.course_id,
            enabled: false
          }
        });
        Log.info(response);
      }
    }
  }
}
