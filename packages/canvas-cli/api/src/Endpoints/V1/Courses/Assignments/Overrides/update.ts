import { client } from '../../../../../Client.js';
import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /**
   * The IDs of the override's target students. If present, the IDs must each
   * identify a user with an active student enrollment in the course that is
   * not already targetted by a different adhoc override. Ignored unless the
   * override being updated is adhoc.
   *
   * Format: 'int64'
   */
  'assignment_override[student_ids]': number[];
  /**
   * The title of an adhoc assignment override. Ignored unless the override
   * being updated is adhoc.
   */
  'assignment_override[title]': string;
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
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update an assignment override
 *
 * All current overridden values must be supplied if they are to be retained;
 * e.g. if due_at was overridden, but this PUT omits a value for due_at, due_at
 * will no longer be overridden. If the override is adhoc and student_ids is not
 * supplied, the target override set is unchanged. Target override sets cannot
 * be changed for group or section overrides.
 *
 * Nickname: update_assignment_override
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<AssignmentOverride>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/overrides/{id}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
