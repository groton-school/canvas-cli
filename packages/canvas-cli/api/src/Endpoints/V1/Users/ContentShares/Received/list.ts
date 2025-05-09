import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { ContentShare } from '../../../../../Resources/ContentShares.js';

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
 * List content shares
 *
 * Return a paginated list of content shares a user has sent or received. Use
 * +self+ as the user_id to retrieve your own content shares. Only linked
 * observers and administrators may view other users' content shares.
 *
 * Nickname: list_content_shares_received
 */
export async function list(options: Options) {
  return await client().fetchAs<ContentShare[]>(
    `/api/v1/users/{user_id}/content_shares/received`,
    {
      method: 'GET',
      ...options
    }
  );
}
