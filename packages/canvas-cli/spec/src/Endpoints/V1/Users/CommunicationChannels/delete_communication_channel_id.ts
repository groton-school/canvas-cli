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
 * Nickname: delete_communication_channel_id
 */
export async function delete_communication_channel_id({
  parameters
}: Options): Promise<CommunicationChannel> {
  return await (
    await fetch(`/v1/users/{user_id}/communication_channels/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
