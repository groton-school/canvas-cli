import { client } from '../../../../Client.js';
import { AccountNotification } from '../../../../Resources/AccountNotifications.js';

export type show_global_notificationPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: show_global_notificationPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Show a global notification
 *
 * Returns a global notification for the current user A notification that has
 * been closed by the user will not be returned
 *
 * Nickname: show_global_notification
 */
export async function show_global_notification(options: Options) {
  const response = await client().fetchAs<AccountNotification>(
    `/api/v1/accounts/{account_id}/account_notifications/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
