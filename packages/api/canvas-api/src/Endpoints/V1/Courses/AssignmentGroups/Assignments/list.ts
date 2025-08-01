import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { Assignment } from '../../../../../Resources/Assignments.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  assignment_group_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
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
    /**
     * Apply assignment overrides for each assignment, defaults to true.
     *
     * Type: boolean
     */
    override_assignment_dates: boolean | string;
    /**
     * Split up "needs_grading_count" by sections into the
     * "needs_grading_count_by_section" key, defaults to false
     *
     * Type: boolean
     */
    needs_grading_count_by_section: boolean | string;
    /**
     * If included, only return certain assignments depending on due date and
     * submission status.
     */
    bucket: string;
    /** If set, return only assignments specified */
    assignment_ids: string[];
    /** Determines the order of the assignments. Defaults to "position". */
    order_by: string;
    /**
     * Return only assignments that have post_to_sis set or not set.
     *
     * Type: boolean
     */
    post_to_sis: boolean | string;
    /**
     * Return only New Quizzes assignments
     *
     * Type: boolean
     */
    new_quizzes: boolean | string;
  }>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List assignments
 *
 * Returns the paginated list of assignments for the current course or
 * assignment group.
 *
 * Nickname: list_assignments_assignment_groups
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Assignment[]>(
    `/api/v1/courses/{course_id}/assignment_groups/{assignment_group_id}/assignments`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
