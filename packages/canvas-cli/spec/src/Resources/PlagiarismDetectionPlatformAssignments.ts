/** A Canvas assignment */
export type LtiAssignment = {
  /**
   * A Canvas assignment
   *
   * Type: integer
   */
  id: number;
  /** A Canvas assignment */
  name: string;
  /** A Canvas assignment */
  description: string;
  /**
   * A Canvas assignment
   *
   * Type: integer
   */
  points_possible: number;
  /**
   * The due date for the assignment. If a user id is supplied and an assignment
   * override is in place this field will reflect the due date as it applies to
   * the user.
   *
   * Format: 'date-time'
   */
  due_at: string;
  /** A Canvas assignment */
  lti_id: string;
  /**
   * A Canvas assignment
   *
   * Type: integer
   */
  course_id: number;
  /** A Canvas assignment */
  lti_course_id: string;
};
