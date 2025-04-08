import { client } from '../../../Client.js';
import { CommMessage } from '../../../Resources/CommMessages.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List of CommMessages for a user
 *
 * Retrieve a paginated list of messages sent to a user.
 *
 * Nickname: list_of_commmessages_for_user
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/comm_messages`, {
    method: 'GET',
    params: parameters
  });
}
