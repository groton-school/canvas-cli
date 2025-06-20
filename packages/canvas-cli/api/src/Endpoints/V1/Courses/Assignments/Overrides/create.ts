import { client } from '../../../../../Client.js';
import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

export type createPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
};

export type createFormParameters = {
  /**
   * The IDs of the override's target students. If present, the IDs must each
   * identify a user with an active student enrollment in the course that is
   * not already targetted by a different adhoc override.
   *
   * Format: 'int64'
   */
  'assignment_override[student_ids]': number[];
  /**
   * The title of the adhoc assignment override. Required if student_ids is
   * present, ignored otherwise (the title is set to the name of the targetted
   * group or section instead).
   */
  'assignment_override[title]': string;
  /**
   * The ID of the override's target group. If present, the following
   * conditions must be met for the override to be successful:
   *
   * 1. The assignment MUST be a group assignment (a group_category_id is
   *    assigned to it)
   * 2. The ID must identify an active group in the group set the assignment is
   *    in
   * 3. The ID must not be targetted by a different override
   *
   * See {Appendix: Group assignments} for more info.
   *
   * Format: 'int64'
   */
  'assignment_override[group_id]': number;
  /**
   * The ID of the override's target section. If present, must identify an
   * active section of the assignment's course not already targetted by a
   * different override.
   *
   * Format: 'int64'
   */
  'assignment_override[course_section_id]': number;
  /**
   * The day/time the overridden assignment is due. Accepts times in ISO 8601
   * format, e.g. 2014-10-21T18:48:00Z. If absent, this override will not
   * affect due date. May be present but null to indicate the override removes
   * any previous due date.
   *
   * Format: date-time
   */
  'assignment_override[due_at]': string;
  /**
   * The day/time the overridden assignment becomes unlocked. Accepts times in
   * ISO 8601 format, e.g. 2014-10-21T18:48:00Z. If absent, this override will
   * not affect the unlock date. May be present but null to indicate the
   * override removes any previous unlock date.
   *
   * Format: date-time
   */
  'assignment_override[unlock_at]': string;
  /**
   * The day/time the overridden assignment becomes locked. Accepts times in
   * ISO 8601 format, e.g. 2014-10-21T18:48:00Z. If absent, this override will
   * not affect the lock date. May be present but null to indicate the
   * override removes any previous lock date.
   *
   * Format: date-time
   */
  'assignment_override[lock_at]': string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create an assignment override
 *
 * One of student_ids, group_id, or course_section_id must be present. At most
 * one should be present; if multiple are present only the most specific
 * (student_ids first, then group_id, then course_section_id) is used and any
 * others are ignored.
 *
 * Nickname: create_assignment_override
 */
export async function create(options: Options) {
  const response = await client().fetchAs<AssignmentOverride>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/overrides`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
