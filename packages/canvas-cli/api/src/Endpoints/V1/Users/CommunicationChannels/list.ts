import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { CommunicationChannel } from '../../../../Resources/CommunicationChannels.js';

export type listPathParameters = {
  /** ID */
  user_id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List user communication channels
 *
 * Returns a paginated list of communication channels for the specified user,
 * sorted by position.
 *
 * Nickname: list_user_communication_channels
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<CommunicationChannel[]>(
    `/v1/users/{user_id}/communication_channels`,
    {
      method: 'GET',
      pathParams
    }
  );
}
