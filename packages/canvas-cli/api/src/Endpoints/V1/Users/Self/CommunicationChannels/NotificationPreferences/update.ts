import { client } from '../../../../../../Client.js';

type Parameters = {
  /** The desired frequency for <X> notification */
  'notification_preferences[<X>][frequency]': string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update multiple preferences
 *
 * Change the preferences for multiple notifications for a single communication
 * channel at once
 *
 * Nickname: update_multiple_preferences_type
 */
export async function update({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/users/self/communication_channels/{type}/{address}/notification_preferences`,
    { method: 'PUT', params: parameters }
  );
}
