import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List of preference categories
 *
 * Fetch all notification preference categories for the given communication
 * channel
 *
 * Nickname: list_of_preference_categories
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/users/{user_id}/communication_channels/{communication_channel_id}/notification_preference_categories`,
    { method: 'GET', params: parameters }
  );
}
