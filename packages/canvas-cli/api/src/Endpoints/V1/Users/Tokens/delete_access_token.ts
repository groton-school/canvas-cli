import { client } from '../../../../Client.js';

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
export async function delete_access_token({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/users/{user_id}/tokens/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
