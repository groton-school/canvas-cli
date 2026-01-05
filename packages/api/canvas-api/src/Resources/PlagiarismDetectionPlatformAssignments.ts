import { JSONValue } from '@battis/typescript-tricks';

/** A Canvas assignment */
export type LtiAssignment = {
  /** Type: integer */
  id: number | string;
  name: string;
  description: string;
  /** Type: integer */
  points_possible: number | string;
  /**
   * The due date for the assignment. If a user id is supplied and an assignment
   * override is in place this field will reflect the due date as it applies to
   * the user.
   *
   * Format: date-time
   */
  due_at: string;
  lti_id: string;
  /** Type: integer */
  course_id: number | string;
  lti_course_id: string;
};
