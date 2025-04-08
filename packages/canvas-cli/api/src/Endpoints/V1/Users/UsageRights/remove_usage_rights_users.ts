import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Remove usage rights
 *
 * Removes copyright and license information associated with one or more files
 *
 * Nickname: remove_usage_rights_users
 */
export async function remove_usage_rights_users({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/users/{user_id}/usage_rights`, {
    method: 'DELETE',
    params: parameters
  });
}
