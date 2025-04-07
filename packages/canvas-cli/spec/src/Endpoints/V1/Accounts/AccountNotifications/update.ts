type Parameters = {
  /** The subject of the notification. */
  'account_notification[subject]': string;
  /** The message body of the notification. */
  'account_notification[message]': string;
  /**
   * The start date and time of the notification in ISO8601 format. e.g.
   * 2014-01-01T01:00Z
   *
   * Format: 'date-time'
   */
  'account_notification[start_at]': string;
  /**
   * The end date and time of the notification in ISO8601 format. e.g.
   * 2014-01-01T01:00Z
   *
   * Format: 'date-time'
   */
  'account_notification[end_at]': string;
  /** The icon to display with the notification. */
  'account_notification[icon]': string;
  /**
   * The role(s) to send global notification to. Note: ommitting this field
   * will send to everyone Example: account_notification_roles:
   * ["StudentEnrollment", "TeacherEnrollment"]
   */
  account_notification_roles: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Update a global notification
 *
 * Update global notification for an account.
 *
 * Nickname: update_global_notification
 */
export async function update({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/accounts/{account_id}/account_notifications/{id}`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
