import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show an access token
 *
 * The ID can be the actual database ID of the token, or the 'token_hint' value.
 *
 * Nickname: show_access_token
 */
export async function show_access_token({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/users/{user_id}/tokens/{id}`, {
    method: 'GET',
    params: parameters
  });
}
