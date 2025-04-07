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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(
      `/v1/users/{user_id}/communication_channels/{type}/{address}/notification_preferences`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
