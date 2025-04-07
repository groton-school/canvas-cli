type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Hide a stream item
 *
 * Hide the given stream item.
 *
 * Nickname: hide_stream_item
 */
export async function hide_stream_item({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/self/activity_stream/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
