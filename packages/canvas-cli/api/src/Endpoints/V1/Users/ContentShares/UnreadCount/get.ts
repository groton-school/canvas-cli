import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { unread_countinteger } from '../../../../../Overrides.js';

export type getPathParameters = {
  /** ID */
  user_id: string;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get unread shares count
 *
 * Return the number of content shares a user has received that have not yet
 * been read. Use +self+ as the user_id to retrieve your own content shares.
 * Only linked observers and administrators may view other users' content
 * shares.
 *
 * Nickname: get_unread_shares_count
 */
export async function get(options: Options) {
  const response = await client().fetchAs<unread_countinteger>(
    `/api/v1/users/{user_id}/content_shares/unread_count`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
