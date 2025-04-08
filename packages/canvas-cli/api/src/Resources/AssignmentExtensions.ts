export type AssignmentExtension = {
  /**
   * The ID of the Assignment the extension belongs to.
   *
   * Format: 'int64'
   */
  assignment_id: number;
  /**
   * The ID of the Student that needs the assignment extension.
   *
   * Format: 'int64'
   */
  user_id: number;
  /**
   * Number of times the student is allowed to re-submit the assignment
   *
   * Format: 'int64'
   */
  extra_attempts: number;
};
