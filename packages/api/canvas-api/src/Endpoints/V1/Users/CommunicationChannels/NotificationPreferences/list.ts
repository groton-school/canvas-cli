import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { NotificationPreference } from '../../../../../Resources/NotificationPreferences.js';

export type listPathParameters = {
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
};

export type listSearchParameters = Masquerade & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List preferences
 *
 * Fetch all preferences for the given communication channel
 *
 * Nickname: list_preferences_type
 */
export async function list(options: Options) {
  const response = await client().fetchAs<NotificationPreference[]>(
    `/api/v1/users/{user_id}/communication_channels/{type}/{address}/notification_preferences`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
