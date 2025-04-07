import { ContentShare } from '../../../../Resources/ContentShares.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get content share
 *
 * Return information about a single content share. You may use +self+ as the
 * user_id to retrieve your own content share.
 *
 * Nickname: get_content_share
 */
export async function get({ parameters }: Options): Promise<ContentShare> {
  return await (
    await fetch(`/v1/users/{user_id}/content_shares/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
