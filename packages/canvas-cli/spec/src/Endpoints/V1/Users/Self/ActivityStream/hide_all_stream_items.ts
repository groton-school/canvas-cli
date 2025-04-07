type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Hide all stream items
 *
 * Hide all stream items for the user
 *
 * Nickname: hide_all_stream_items
 */
export async function hide_all_stream_items({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/self/activity_stream`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
