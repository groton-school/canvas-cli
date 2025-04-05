export type AccountNotification = {
  /** The subject of the notifications */
  subject: string;
  /** The message to be sent in the notification. */
  message: string;
  /**
   * When to send out the notification.
   *
   * Format: 'date-time'
   */
  start_at: string;
  /**
   * When to expire the notification.
   *
   * Format: 'date-time'
   */
  end_at: string;
  /** The icon to display with the message. Defaults to warning. */
  icon: string;
  /**
   * (Deprecated) The roles to send the notification to. If roles is not passed
   * it defaults to all roles
   */
  roles: string[];
  /**
   * The roles to send the notification to. If roles is not passed it defaults
   * to all roles
   */
  role_ids: number[];
  /** The author of the notification. Available only to admins using include_all. */
  author: unknown;
};
