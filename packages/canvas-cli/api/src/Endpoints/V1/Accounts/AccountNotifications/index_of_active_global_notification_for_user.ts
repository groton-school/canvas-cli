import { client } from '../../../../Client.js';
import { AccountNotification } from '../../../../Resources/AccountNotifications.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Index of active global notification for the user
 *
 * Returns a list of all global notifications in the account for the current
 * user Any notifications that have been closed by the user will not be
 * returned, unless a include_past parameter is passed in as true. Admins can
 * request all global notifications for the account by passing in an include_all
 * parameter.
 *
 * Nickname: index_of_active_global_notification_for_user
 */
export async function index_of_active_global_notification_for_user({
  parameters
}: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/account_notifications`,
    { method: 'GET', params: parameters }
  );
}
