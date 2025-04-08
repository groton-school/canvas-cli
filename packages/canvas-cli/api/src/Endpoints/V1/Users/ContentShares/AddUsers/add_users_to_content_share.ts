import { client } from '../../../../../Client.js';
import { ContentShare } from '../../../../../Resources/ContentShares.js';

type Parameters = {
  /**
   * IDs of users to share the content with.
   *
   * Array
   */
  receiver_ids: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Add users to content share
 *
 * Send a previously created content share to additional users
 *
 * Nickname: add_users_to_content_share
 */
export async function add_users_to_content_share({ parameters }: Options) {
  return await client().fetchAs<ContentShare>(
    `/v1/users/{user_id}/content_shares/{id}/add_users`,
    { method: 'POST', params: parameters }
  );
}
