import { ApolloClient, gql, InMemoryCache, useMutation } from '@apollo/client';
import { Colors } from '@battis/qui-cli.colors';
import '@battis/qui-cli.env';
import { Log } from '@battis/qui-cli.log';
import * as Plugin from '@battis/qui-cli.plugin';
import * as Canvas from '@groton/canvas-cli.api';

export type Configuration = Plugin.Configuration & {
  canvasInstanceUrl?: string;
  account_id?: string;
};

export const name = '@groton/canvas-notifications-cli';
export const src = import.meta.dirname;

let canvas_instance_url: string | undefined = undefined;
let account_id: string | undefined = undefined;

export function configure(config: Configuration = {}) {
  account_id = Plugin.hydrate(config.account_id, account_id);
  canvas_instance_url = Plugin.hydrate(
    config.canvasInstanceUrl,
    canvas_instance_url
  );
  if (
    config.canvasInstanceUrl &&
    process.env.CANVAS_CLIENT_ID &&
    process.env.CANVAS_CLIENT_SECRET &&
    process.env.CANVAS_REDIRECT_URI
  ) {
    Log.info(`Using Canvas instance ${Colors.url(config.canvasInstanceUrl)}`);
    const canvasConfig = {
      instance_url: config.canvasInstanceUrl,
      client_id: process.env.CANVAS_CLIENT_ID,
      client_secret: process.env.CANVAS_CLIENT_SECRET,
      redirect_uri: process.env.CANVAS_REDIRECT_URI
    };
    if (process.env.CANVAS_TOKEN_STORE) {
      // @ts-expect-error 2339 should really type CanvasConfig, but need to directly import @oauth2-cli/canvas for that
      canvasConfig.store = path.join(
        process.env.CANVAS_TOKEN_STORE,
        `${new URL(config.canvasInstanceUrl).hostname}.json`
      );
    }
    Canvas.init(canvasConfig);
  }
}

export function options(): Plugin.Options {
  return {
    opt: {
      canvasInstanceUrl: {
        description: `URL of canvas instance`
      }
    },
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
    input: {contextType: Course, courseId: $courseId, isPolicyOverride: true, enabled: false}
  ) {
    user {
      _id
      notificationPreferencesEnabled(contextType: Course, courseId: $courseId)
      notificationPreferences {
        channels {
          _id
          path
          pathType
          notificationPolicyOverrides(contextType: Course, courseId: $courseId) {
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
