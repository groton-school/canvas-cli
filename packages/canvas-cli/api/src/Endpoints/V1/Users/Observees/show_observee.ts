import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show an observee
 *
 * Gets information about an observed user.
 *
 * Note:* all users are allowed to view their own observees.
 *
 * Nickname: show_observee
 */
export async function show_observee({ parameters }: Options) {
  return await client().fetchAs<User>(
    `/v1/users/{user_id}/observees/{observee_id}`,
    { method: 'GET', params: parameters }
  );
}
