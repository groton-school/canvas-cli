export type AssignmentExtension = {
  /**
   * The ID of the Assignment the extension belongs to.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  assignment_id: number | string;
  /**
   * The ID of the Student that needs the assignment extension.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  user_id: number | string;
  /**
   * Number of times the student is allowed to re-submit the assignment
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  extra_attempts: number | string;
};
