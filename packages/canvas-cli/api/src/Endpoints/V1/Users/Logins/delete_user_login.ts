import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a user login
 *
 * Delete an existing login.
 *
 * Nickname: delete_user_login
 */
export async function delete_user_login({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/users/{user_id}/logins/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
