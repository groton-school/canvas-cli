import { client } from '../../../../Client.js';
import { CommunicationChannel } from '../../../../Resources/CommunicationChannels.js';

type listPathParameters = {
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List user communication channels
 *
 * Returns a paginated list of communication channels for the specified user,
 * sorted by position.
 *
 * Nickname: list_user_communication_channels
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/users/{user_id}/communication_channels`,
    {
      method: 'GET',
      pathParams
    }
  );
}
