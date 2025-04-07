type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Find recipients
 *
 * Find valid recipients (users, courses and groups) that the current user can
 * send messages to. The /api/v1/search/recipients path is the preferred
 * endpoint, /api/v1/conversations/find_recipients is deprecated.
 *
 * Pagination is supported.
 *
 * Nickname: find_recipients_conversations
 */
export async function find_recipients_conversations({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/conversations/find_recipients`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
