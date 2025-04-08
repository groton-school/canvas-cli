export type CommunicationChannel = {
  /**
   * The ID of the communication channel.
   *
   * Type: integer
   */
  id: number;
  /** The address, or path, of the communication channel. */
  address: string;
  /**
   * The type of communcation channel being described. Possible values are:
   * 'email', 'push', 'sms'. This field determines the type of value seen in
   * 'address'.
   */
  type: string;
  /**
   * The position of this communication channel relative to the user's other
   * channels when they are ordered.
   *
   * Type: integer
   */
  position: number;
  /**
   * The ID of the user that owns this communication channel.
   *
   * Type: integer
   */
  user_id: number;
  /**
   * The number of bounces the channel has experienced. This is reset if the
   * channel sends successfully.
   *
   * Type: integer
   */
  bounce_count: number;
  /**
   * The time the last bounce occurred.
   *
   * Format: date-time
   */
  last_bounce_at: string;
  /**
   * The current state of the communication channel. Possible values are:
   * 'unconfirmed' or 'active'.
   */
  workflow_state: string;
};
