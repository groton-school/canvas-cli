import { client } from '../../../../Client.js';
import { AccountNotification } from '../../../../Resources/AccountNotifications.js';

export type index_of_active_global_notification_for_userPathParameters = {
  /** ID */
  account_id: string;
};

export type index_of_active_global_notification_for_userSearchParameters = {
  /** Include past and dismissed global announcements. */
  include_past: boolean;
  /**
   * Include all global announcements, regardless of user's role or
   * availability date. Only available to account admins.
   */
  include_all: boolean;
  /**
   * Include a flag for each notification indicating whether it has been read
   * by the user.
   */
  show_is_closed: boolean;
};

type Options = {
  pathParams: index_of_active_global_notification_for_userPathParameters;
  searchParams?: index_of_active_global_notification_for_userSearchParameters;
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
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/account_notifications`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
