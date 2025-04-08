import { client } from '../../../../../Client.js';
import { ContentShare } from '../../../../../Resources/ContentShares.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List content shares
 *
 * Return a paginated list of content shares a user has sent or received. Use
 * +self+ as the user_id to retrieve your own content shares. Only linked
 * observers and administrators may view other users' content shares.
 *
 * Nickname: list_content_shares_sent
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/users/{user_id}/content_shares/sent`,
    { method: 'GET', params: parameters }
  );
}
