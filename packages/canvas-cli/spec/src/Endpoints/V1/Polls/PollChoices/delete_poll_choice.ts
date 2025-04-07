type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a poll choice
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_poll_choice
 */
export async function delete_poll_choice({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/polls/{poll_id}/poll_choices/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
