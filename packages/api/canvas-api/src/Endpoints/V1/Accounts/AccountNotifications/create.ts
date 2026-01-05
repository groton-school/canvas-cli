import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
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
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a global notification
 *
 * Create and return a new global notification for an account.
 *
 * Nickname: create_global_notification
 */
export async function create(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/account_notifications`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
