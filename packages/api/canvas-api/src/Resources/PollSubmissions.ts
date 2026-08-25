import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type PollSubmission = {
  /**
   * The unique identifier for the poll submission.
   *
   * type: integer
   */
  id: number | string;
  /**
   * The unique identifier of the poll choice chosen for this submission.
   *
   * type: integer
   */
  poll_choice_id: number | string;
  /**
   * the unique identifier of the user who submitted this poll submission.
   *
   * type: integer
   */
  user_id: number | string;
  /**
   * The date and time the poll submission was submitted.
   *
   * 

format: 'date-time'
   */
  created_at: string;
};
