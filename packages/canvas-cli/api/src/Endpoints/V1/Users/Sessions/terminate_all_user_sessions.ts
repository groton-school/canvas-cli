import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Terminate all user sessions
 *
 * Terminates all sessions for a user. This includes all browser-based sessions
 * and all access tokens, including manually generated ones. The user can
 * immediately re-authenticate to access Canvas again if they have the current
 * credentials. All integrations will need to be re-authorized.
 *
 * Nickname: terminate_all_user_sessions
 */
export async function terminate_all_user_sessions({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/users/{id}/sessions`, {
    method: 'DELETE',
    params: parameters
  });
}
