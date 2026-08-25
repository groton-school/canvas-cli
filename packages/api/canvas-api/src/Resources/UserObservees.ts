import { JSONValue } from '@battis/typescript-tricks';

/**
 * A code used for linking a user to a student to observe them.
 */
export type PairingCode = {
  /**
   * The ID of the user.
   *
   * type: integer

format: 'int64'
   */
  user_id: number | string;
  /**
   * The actual code to be sent to other APIs
   *
   *
   */
  code: string;
  /**
   * When the code expires
   *
   * 

format: 'date-time'
   */
  expires_at: string;
  /**
   * The current status of the code
   *
   *
   */
  workflow_state: string;
};
