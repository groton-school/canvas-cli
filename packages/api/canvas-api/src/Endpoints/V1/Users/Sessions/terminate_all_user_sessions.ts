import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type terminate_all_user_sessionsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type terminate_all_user_sessionsSearchParameters = Masquerade;

type Options = (
  | {
      path: terminate_all_user_sessionsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: terminate_all_user_sessionsPathParameters;
    }
) &
  (
    | {
        query?: Partial<terminate_all_user_sessionsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<terminate_all_user_sessionsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: terminate_all_user_sessionsSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: terminate_all_user_sessionsSearchParameters;
          }
      ) & {
        strict: true;
      })
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/{id}/sessions`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
