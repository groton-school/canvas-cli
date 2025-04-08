import { client } from '../../../../../../Client.js';

type Parameters = {
  /** The desired frequency for each notification in the category */
  'notification_preferences[frequency]': string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update preferences by category
 *
 * Change the preferences for multiple notifications based on the category for a
 * single communication channel
 *
 * Nickname: update_preferences_by_category
 */
export async function update({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/users/self/communication_channels/{communication_channel_id}/notification_preference_categories/{category}`,
    { method: 'PUT', params: parameters }
  );
}
