import { CommunicationChannel } from '../../../../Resources/CommunicationChannels.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List user communication channels
 *
 * Returns a paginated list of communication channels for the specified user,
 * sorted by position.
 *
 * Nickname: list_user_communication_channels
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/users/{user_id}/communication_channels`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
