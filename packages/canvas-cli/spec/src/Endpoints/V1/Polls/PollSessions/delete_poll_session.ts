type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a poll session
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_poll_session
 */
export async function delete_poll_session({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/polls/{poll_id}/poll_sessions/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
