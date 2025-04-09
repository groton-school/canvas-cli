import { client } from '../../../../Client.js';
import { Assignment } from '../../../../Resources/Assignments.js';

type listPathParameters = {
  /** ID */
  course_id: string;
};

type listSearchParameters = {
  /**
   * Optional information to include with each assignment: submission:: The
   * current user's current +Submission+ assignment_visibility:: An array of
   * ids of students who can see the assignment all_dates:: An array of
   * +AssignmentDate+ structures, one for each override, and also a +base+ if
   * the assignment has an "Everyone" / "Everyone Else" date overrides:: An
   * array of +AssignmentOverride+ structures observed_users:: An array of
   * submissions for observed users can_edit:: an extra Boolean value will be
   * included with each +Assignment+ (and +AssignmentDate+ if +all_dates+ is
   * supplied) to indicate whether the caller can edit the assignment or date.
   * Moderated grading and closed grading periods may restrict a user's
   * ability to edit an assignment. score_statistics:: An object containing
   * min, max, and mean score on this assignment. This will not be included
   * for students if there are less than 5 graded assignments or if disabled
   * by the instructor. Only valid if 'submission' is also included. ab_guid::
   * An array of guid strings for academic benchmarks
   */
  include: string[];
  /** The partial title of the assignments to match and return. */
  search_term: string;
  /** Apply assignment overrides for each assignment, defaults to true. */
  override_assignment_dates: boolean;
  /**
   * Split up "needs_grading_count" by sections into the
   * "needs_grading_count_by_section" key, defaults to false
   */
  needs_grading_count_by_section: boolean;
  /**
   * If included, only return certain assignments depending on due date and
   * submission status.
   */
  bucket: string;
  /** If set, return only assignments specified */
  assignment_ids: string[];
  /** Determines the order of the assignments. Defaults to "position". */
  order_by: string;
  /** Return only assignments that have post_to_sis set or not set. */
  post_to_sis: boolean;
  /** Return only New Quizzes assignments */
  new_quizzes: boolean;
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List assignments
 *
 * Returns the paginated list of assignments for the current course or
 * assignment group.
 *
 * Nickname: list_assignments_assignments
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/assignments`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
