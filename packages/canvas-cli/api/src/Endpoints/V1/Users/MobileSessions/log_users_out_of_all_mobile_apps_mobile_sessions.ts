import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Log users out of all mobile apps
 *
 * Permanently expires any active mobile sessions, forcing them to re-authorize.
 *
 * The route that takes a user id will expire mobile sessions for that user. The
 * route that doesn't take a user id will expire mobile sessions for _all_ users
 * in the institution.
 *
 * Nickname: log_users_out_of_all_mobile_apps_mobile_sessions
 */
export async function log_users_out_of_all_mobile_apps_mobile_sessions({
  parameters
}: Options) {
  return await client().fetchAs<void>(`/v1/users/mobile_sessions`, {
    method: 'DELETE',
    params: parameters
  });
}
