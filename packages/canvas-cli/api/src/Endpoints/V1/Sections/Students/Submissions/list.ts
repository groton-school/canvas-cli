import { client } from '../../../../../Client.js';

export type listPathParameters = {
  /** ID */
  section_id: string;
};

export type listSearchParameters = {
  /**
   * List of student ids to return submissions for. If this argument is
   * omitted, return submissions for the calling user. Students may only list
   * their own submissions. Observers may only list those of associated
   * students. The special id "all" will return submissions for all students
   * in the course/section as appropriate.
   */
  student_ids: string[];
  /**
   * List of assignments to return submissions for. If none are given,
   * submissions for all assignments are returned.
   */
  assignment_ids: string[];
  /**
   * If this argument is present, the response will be grouped by student,
   * rather than a flat array of submissions.
   */
  grouped: boolean;
  /**
   * If this argument is set to true, the response will only include
   * submissions for assignments that have the post_to_sis flag set to true
   * and user enrollments that were added through sis.
   */
  post_to_sis: boolean;
  /**
   * If this argument is set, the response will only include submissions that
   * were submitted after the specified date_time. This will exclude
   * submissions that do not have a submitted_at which will exclude
   * unsubmitted submissions. The value must be formatted as ISO 8601
   * YYYY-MM-DDTHH:MM:SSZ.
   *
   * Format: date-time
   */
  submitted_since: string;
  /**
   * If this argument is set, the response will only include submissions that
   * were graded after the specified date_time. This will exclude submissions
   * that have not been graded. The value must be formatted as ISO 8601
   * YYYY-MM-DDTHH:MM:SSZ.
   *
   * Format: date-time
   */
  graded_since: string;
  /**
   * The id of the grading period in which submissions are being requested
   * (Requires grading periods to exist on the account)
   *
   * Format: 'int64'
   */
  grading_period_id: number;
  /** The current status of the submission */
  workflow_state: string;
  /**
   * The current state of the enrollments. If omitted will include all
   * enrollments that are not deleted.
   */
  enrollment_state: string;
  /**
   * If omitted it is set to true. When set to false it will ignore the
   * effective state of the student enrollments and use the workflow_state for
   * the enrollments. The argument is ignored unless enrollment_state argument
   * is also passed.
   */
  state_based_on_date: boolean;
  /**
   * The order submissions will be returned in. Defaults to "id". Doesn't
   * affect results for "grouped" mode.
   */
  order: string;
  /**
   * Determines whether ordered results are returned in ascending or
   * descending order. Defaults to "ascending". Doesn't affect results for
   * "grouped" mode.
   */
  order_direction: string;
  /**
   * Associations to include with the group. `total_scores` requires the
   * `grouped` argument.
   */
  include: string[];
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List submissions for multiple assignments
 *
 * A paginated list of all existing submissions for a given set of students and
 * assignments.
 *
 * Nickname: list_submissions_for_multiple_assignments_sections
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/sections/{section_id}/students/submissions`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
