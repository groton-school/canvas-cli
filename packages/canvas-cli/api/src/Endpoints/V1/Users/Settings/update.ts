import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Update user settings.
 *
 * Update an existing user's settings.
 *
 * Nickname: update_user_settings
 */
export async function update({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/users/{id}/settings`, {
    method: 'GET',
    params: parameters
  });
}
