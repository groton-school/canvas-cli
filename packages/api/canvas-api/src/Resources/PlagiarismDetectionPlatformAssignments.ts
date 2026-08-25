import { JSONValue } from '@battis/typescript-tricks';

/**
 * A Canvas assignment
 */
export type LtiAssignment = {
  /**
   *
   *
   * type: integer
   */
  id: number | string;
  /**
   *
   *
   *
   */
  name: string;
  /**
   *
   *
   *
   */
  description: string;
  /**
   *
   *
   * type: integer
   */
  points_possible: number | string;
  /**
   * The due date for the assignment. If a user id is supplied and an assignment override is in place this field will reflect the due date as it applies to the user.
   *
   * format: date-time
   */
  due_at: string;
  /**
   *
   *
   *
   */
  lti_id: string;
  /**
   *
   *
   * type: integer
   */
  course_id: number | string;
  /**
   *
   *
   *
   */
  lti_course_id: string;
};
