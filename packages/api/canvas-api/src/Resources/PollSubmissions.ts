export type PollSubmission = {
  /**
   * The unique identifier for the poll submission.
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The unique identifier of the poll choice chosen for this submission.
   *
   * Type: integer
   */
  poll_choice_id: number | string;
  /**
   * The unique identifier of the user who submitted this poll submission.
   *
   * Type: integer
   */
  user_id: number | string;
  /**
   * The date and time the poll submission was submitted.
   *
   * Format: 'date-time'
   */
  created_at: string;
};
