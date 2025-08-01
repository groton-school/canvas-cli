import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { CommunicationChannel } from '../../../../Resources/CommunicationChannels.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
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
export async function list(options: Options) {
  const response = await client().fetchAs<CommunicationChannel[]>(
    `/api/v1/users/{user_id}/communication_channels`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
