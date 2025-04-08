import { client } from '../../../../Client.js';
import { ContentShare } from '../../../../Resources/ContentShares.js';

type Parameters = {
  /** Read state for the content share */
  read_state: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update a content share
 *
 * Mark a content share read or unread
 *
 * Nickname: update_content_share
 */
export async function update({ parameters }: Options) {
  return await client().fetchAs<ContentShare>(
    `/v1/users/{user_id}/content_shares/{id}`,
    { method: 'PUT', params: parameters }
  );
}
