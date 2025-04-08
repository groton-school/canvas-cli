import { client } from '../../../../../Client.js';
import { NotificationPreference } from '../../../../../Resources/NotificationPreferences.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a preference
 *
 * Fetch the preference for the given notification for the given communication
 * channel
 *
 * Nickname: get_preference_type
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<NotificationPreference>(
    `/v1/users/{user_id}/communication_channels/{type}/{address}/notification_preferences/{notification}`,
    { method: 'GET', params: parameters }
  );
}
