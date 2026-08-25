import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type AuthenticationEvent = {
  /**
   * timestamp of the event
   *
   * format: date-time
   */
  created_at: string;
  /**
   * authentication event type ('login' or 'logout')
   *
   *
   */
  event_type: string;
  /**
   * ID of the pseudonym (login) associated with the event
   *
   * type: integer
   */
  pseudonym_id: number | string;
  /**
   * ID of the account associated with the event. will match the account_id in the associated pseudonym.
   *
   * type: integer
   */
  account_id: number | string;
  /**
   * ID of the user associated with the event will match the user_id in the associated pseudonym.
   *
   * type: integer
   */
  user_id: number | string;
};
