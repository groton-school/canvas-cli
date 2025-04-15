import { client } from '../../../../Client.js';

export type log_users_out_of_all_mobile_apps_idPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: log_users_out_of_all_mobile_apps_idPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Log users out of all mobile apps
 *
 * Permanently expires any active mobile sessions, forcing them to re-authorize.
 *
 * The route that takes a user id will expire mobile sessions for that user. The
 * route that doesn't take a user id will expire mobile sessions for _all_ users
 * in the institution.
 *
 * Nickname: log_users_out_of_all_mobile_apps_id
 */
export async function log_users_out_of_all_mobile_apps_id(options: Options) {
  return await client().fetchAs<void>(`/api/v1/users/{id}/mobile_sessions`, {
    method: 'DELETE',
    ...options
  });
}
