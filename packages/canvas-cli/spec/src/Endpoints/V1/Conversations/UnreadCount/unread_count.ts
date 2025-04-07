type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Unread count
 *
 * Get the number of unread conversations for the current user
 *
 * Nickname: unread_count
 */
export async function unread_count({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/conversations/unread_count`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
