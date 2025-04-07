type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Mark all as read
 *
 * Mark all conversations as read.
 *
 * Nickname: mark_all_as_read
 */
export async function mark_all_as_read({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/conversations/mark_all_as_read`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
