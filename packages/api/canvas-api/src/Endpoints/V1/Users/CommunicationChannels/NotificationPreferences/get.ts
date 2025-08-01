import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { NotificationPreference } from '../../../../../Resources/NotificationPreferences.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /** ID */
  type: string;
  /** ID */
  address: string;
  /** ID */
  notification: string;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
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
export async function get(options: Options) {
  const response = await client().fetchAs<NotificationPreference>(
    `/api/v1/users/{user_id}/communication_channels/{type}/{address}/notification_preferences/{notification}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
