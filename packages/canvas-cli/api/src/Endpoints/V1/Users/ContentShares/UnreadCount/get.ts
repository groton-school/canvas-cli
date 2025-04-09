import { unread_countinteger } from '';
import { client } from '../../../../../Client.js';

type getPathParameters = {
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

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
export async function get({ pathParams }: Options) {
  return await client().fetchAs<unread_countinteger>(
    `/v1/users/{user_id}/content_shares/unread_count`,
    {
      method: 'GET',
      pathParams
    }
  );
}
