type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a poll
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_poll
 */
export async function delete_poll({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/polls/{id}`, { method: 'DELETE', body: parameters })
  ).json();
}
