import { client } from '../../../../Client.js';
import { AccountNotification } from '../../../../Resources/AccountNotifications.js';

export type close_notification_for_user_destroy_notification_for_adminPathParameters =
  {
    /** ID */
    account_id: string;
    /** ID */
    id: string;
  };

export type close_notification_for_user_destroy_notification_for_adminSearchParameters =
  {
    /** Destroy the account notification. */
    remove: boolean;
  };

type Options = {
  pathParams: close_notification_for_user_destroy_notification_for_adminPathParameters;
  searchParams?: close_notification_for_user_destroy_notification_for_adminSearchParameters;
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
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<AccountNotification>(
    `/v1/accounts/{account_id}/account_notifications/{id}`,
    {
      method: 'DELETE',
      pathParams,
      searchParams
    }
  );
}
