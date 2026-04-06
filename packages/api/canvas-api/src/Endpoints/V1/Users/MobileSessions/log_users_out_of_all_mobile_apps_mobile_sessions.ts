import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type log_users_out_of_all_mobile_apps_mobile_sessionsSearchParameters =
  Masquerade &
    Partial<{
      /**
       * If true, will not expire mobile sessions for account administrators.
       *
       * Type: boolean
       */
      skip_admins: boolean | string;
    }>;

type Options =
  | {
      query?: Partial<log_users_out_of_all_mobile_apps_mobile_sessionsSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<log_users_out_of_all_mobile_apps_mobile_sessionsSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: log_users_out_of_all_mobile_apps_mobile_sessionsSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: log_users_out_of_all_mobile_apps_mobile_sessionsSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * Log users out of all mobile apps
 *
 * Permanently expires any active mobile sessions, forcing them to re-authorize.
 *
 * The route that takes a user id will expire mobile sessions for that user. The
 * route that doesn't take a user id will expire mobile sessions for _all_ users
 * in the institution (except for account administrators if +skip_admins+ is
 * given).
 *
 * Nickname: log_users_out_of_all_mobile_apps_mobile_sessions
 */
export async function log_users_out_of_all_mobile_apps_mobile_sessions(
  options: Options
) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/mobile_sessions`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
