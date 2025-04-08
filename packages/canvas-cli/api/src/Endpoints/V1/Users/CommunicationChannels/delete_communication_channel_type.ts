import { client } from '../../../../Client.js';
import { CommunicationChannel } from '../../../../Resources/CommunicationChannels.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a communication channel
 *
 * Delete an existing communication channel.
 *
 * Nickname: delete_communication_channel_type
 */
export async function delete_communication_channel_type({
  parameters
}: Options) {
  return await client().fetchAs<CommunicationChannel>(
    `/v1/users/{user_id}/communication_channels/{type}/{address}`,
    { method: 'DELETE', params: parameters }
  );
}
