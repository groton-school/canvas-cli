import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { ContentShare } from '../../../../../Resources/ContentShares.js';

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
 * List content shares
 *
 * Return a paginated list of content shares a user has sent or received. Use
 * +self+ as the user_id to retrieve your own content shares. Only linked
 * observers and administrators may view other users' content shares.
 *
 * Nickname: list_content_shares_sent
 */
export async function list(options: Options) {
  const response = await client().fetchAs<ContentShare[]>(
    `/api/v1/users/{user_id}/content_shares/sent`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
