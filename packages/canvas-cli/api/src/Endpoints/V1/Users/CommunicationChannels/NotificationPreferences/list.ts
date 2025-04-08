import { client } from '../../../../../Client.js';
import { NotificationPreference } from '../../../../../Resources/NotificationPreferences.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List preferences
 *
 * Fetch all preferences for the given communication channel
 *
 * Nickname: list_preferences_type
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/users/{user_id}/communication_channels/{type}/{address}/notification_preferences`,
    { method: 'GET', params: parameters }
  );
}
