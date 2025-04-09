import { client } from '../../../../Client.js';

type createPathParameters = {
  /** ID */
  account_id: string;
};

type createFormParameters = {
  /** The subject of the notification. */
  'account_notification[subject]': string;
  /** The message body of the notification. */
  'account_notification[message]': string;
  /**
   * The start date and time of the notification in ISO8601 format. e.g.
   * 2014-01-01T01:00Z
   *
   * Format: date-time
   */
  'account_notification[start_at]': string;
  /**
   * The end date and time of the notification in ISO8601 format. e.g.
   * 2014-01-01T01:00Z
   *
   * Format: date-time
   */
  'account_notification[end_at]': string;
  /** The icon to display with the notification. Note: Defaults to warning. */
  'account_notification[icon]': string;
  /**
   * The role(s) to send global notification to. Note: ommitting this field
   * will send to everyone Example: account_notification_roles:
   * ["StudentEnrollment", "TeacherEnrollment"]
   */
  account_notification_roles: string[];
};

type Options = {
  pathParams: createPathParameters;
  params?: createFormParameters;
};

/**
 * Create a global notification
 *
 * Create and return a new global notification for an account.
 *
 * Nickname: create_global_notification
 */
export async function create({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/account_notifications`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
