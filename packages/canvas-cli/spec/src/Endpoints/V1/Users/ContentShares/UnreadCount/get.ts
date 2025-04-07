import { unread_countinteger } from '';

type Parameters = {};

type Options = {
  parameters: Parameters;
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
export async function get({
  parameters
}: Options): Promise<unread_countinteger> {
  return await (
    await fetch(`/v1/users/{user_id}/content_shares/unread_count`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
