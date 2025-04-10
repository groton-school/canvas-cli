import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { NotificationPreference } from '../../../../../Resources/NotificationPreferences.js';

export type listPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  type: string;
  /** ID */
  address: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function list({ pathParams }: Options) {
  return await client().fetchAs<NotificationPreference[]>(
    `/v1/users/{user_id}/communication_channels/{type}/{address}/notification_preferences`,
    {
      method: 'GET',
      pathParams
    }
  );
}
