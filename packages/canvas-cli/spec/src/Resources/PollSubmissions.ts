export type PollSubmission = {
  /**
   * The unique identifier for the poll submission.
   *
   * Type: integer
   */
  id: number;
  /**
   * The unique identifier of the poll choice chosen for this submission.
   *
   * Type: integer
   */
  poll_choice_id: number;
  /**
   * The unique identifier of the user who submitted this poll submission.
   *
   * Type: integer
   */
  user_id: number;
  /**
   * The date and time the poll submission was submitted.
   *
   * Format: date-time
   */
  created_at: string;
};
