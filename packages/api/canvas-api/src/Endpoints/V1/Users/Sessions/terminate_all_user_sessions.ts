import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type terminate_all_user_sessionsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type terminate_all_user_sessionsSearchParameters = Masquerade;

type Options = {
  pathParams: terminate_all_user_sessionsPathParameters;
} & (
  | {
      searchParams?: Partial<terminate_all_user_sessionsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: terminate_all_user_sessionsSearchParameters;
      strict: true;
    }
);

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
export async function terminate_all_user_sessions(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/users/{id}/sessions`, {
    method: 'DELETE',
    ...options
  });
  return response;
}
