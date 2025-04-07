import { AccountNotification } from '../../../../Resources/AccountNotifications.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show a global notification
 *
 * Returns a global notification for the current user A notification that has
 * been closed by the user will not be returned
 *
 * Nickname: show_global_notification
 */
export async function show_global_notification({
  parameters
}: Options): Promise<AccountNotification> {
  return await (
    await fetch(`/v1/accounts/{account_id}/account_notifications/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
