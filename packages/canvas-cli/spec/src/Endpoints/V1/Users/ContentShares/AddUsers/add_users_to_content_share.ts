import { ContentShare } from '../../../../../Resources/ContentShares.js';

type Parameters = {
  /** IDs of users to share the content with. */
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
export async function add_users_to_content_share({
  parameters
}: Options): Promise<ContentShare> {
  return await (
    await fetch(`/v1/users/{user_id}/content_shares/{id}/add_users`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
