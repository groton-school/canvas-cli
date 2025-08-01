import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { AccountNotification } from '../../../../Resources/AccountNotifications.js';

export type index_of_active_global_notification_for_userPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type index_of_active_global_notification_for_userSearchParameters =
  Masquerade &
    Paginated &
    Partial<{
      /**
       * Include past and dismissed global announcements.
       *
       * Type: boolean
       */
      include_past: boolean | string;
      /**
       * Include all global announcements, regardless of user's role or
       * availability date. Only available to account admins.
       *
       * Type: boolean
       */
      include_all: boolean | string;
      /**
       * Include a flag for each notification indicating whether it has been read
       * by the user.
       *
       * Type: boolean
       */
      show_is_closed: boolean | string;
    }>;

type Options = {
  pathParams: index_of_active_global_notification_for_userPathParameters;
} & (
  | {
      searchParams?: Partial<index_of_active_global_notification_for_userSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: index_of_active_global_notification_for_userSearchParameters;
      strict: true;
    }
);

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
export async function index_of_active_global_notification_for_user(
  options: Options
) {
  const response = await client().fetchAs<AccountNotification[]>(
    `/api/v1/accounts/{account_id}/account_notifications`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
