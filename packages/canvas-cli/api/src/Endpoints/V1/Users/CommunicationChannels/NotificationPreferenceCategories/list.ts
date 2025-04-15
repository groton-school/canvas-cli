import { client } from '../../../../../Client.js';

export type listPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  communication_channel_id: string;
};

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
 * List of preference categories
 *
 * Fetch all notification preference categories for the given communication
 * channel
 *
 * Nickname: list_of_preference_categories
 */
export async function list(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/users/{user_id}/communication_channels/{communication_channel_id}/notification_preference_categories`,
    {
      method: 'GET',
      ...options
    }
  );
}
