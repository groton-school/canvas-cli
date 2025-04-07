type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete an access token
 *
 * The ID can be the actual database ID of the token, or the 'token_hint' value.
 *
 * Nickname: delete_access_token
 */
export async function delete_access_token({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/{user_id}/tokens/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
