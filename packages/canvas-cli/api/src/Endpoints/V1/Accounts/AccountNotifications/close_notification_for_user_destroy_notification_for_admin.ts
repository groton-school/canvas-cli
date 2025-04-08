import { client } from '../../../../Client.js';
import { AccountNotification } from '../../../../Resources/AccountNotifications.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Close notification for user. Destroy notification for admin
 *
 * If the current user no longer wants to see this account notification, it can
 * be closed with this call. This affects the current user only.
 *
 * If the current user is an admin and they pass a remove parameter with a value
 * of "true", the account notification will be destroyed. This affects all
 * users.
 *
 * Nickname: close_notification_for_user_destroy_notification_for_admin
 */
export async function close_notification_for_user_destroy_notification_for_admin({
  parameters
}: Options) {
  return await client().fetchAs<AccountNotification>(
    `/v1/accounts/{account_id}/account_notifications/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
