export type AuthenticationEvent = {
  /**
   * Timestamp of the event
   *
   * Format: date-time
   */
  created_at: string;
  /** Authentication event type ('login' or 'logout') */
  event_type: string;
  /**
   * ID of the pseudonym (login) associated with the event
   *
   * Type: integer
   */
  pseudonym_id: number;
  /**
   * ID of the account associated with the event. will match the account_id in
   * the associated pseudonym.
   *
   * Type: integer
   */
  account_id: number;
  /**
   * ID of the user associated with the event will match the user_id in the
   * associated pseudonym.
   *
   * Type: integer
   */
  user_id: number;
};
