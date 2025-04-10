import { client } from '../../../../../Client.js';
import { NotificationPreference } from '../../../../../Resources/NotificationPreferences.js';

export type getPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  type: string;
  /** ID */
  address: string;
  /** ID */
  notification: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get a preference
 *
 * Fetch the preference for the given notification for the given communication
 * channel
 *
 * Nickname: get_preference_type
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<NotificationPreference>(
    `/v1/users/{user_id}/communication_channels/{type}/{address}/notification_preferences/{notification}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
