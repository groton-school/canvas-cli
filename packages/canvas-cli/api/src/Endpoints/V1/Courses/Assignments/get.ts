import { client } from '../../../../Client.js';
import { Assignment } from '../../../../Resources/Assignments.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type getSearchParameters = {
  /**
   * Associations to include with the assignment. The "assignment_visibility"
   * option requires that the Differentiated Assignments course feature be
   * turned on. If "observed_users" is passed, submissions for observed users
   * will also be included. For "score_statistics" to be included, the
   * "submission" option must also be set.
   */
  include: string[];
  /** Apply assignment overrides to the assignment, defaults to true. */
  override_assignment_dates: boolean;
  /**
   * Split up "needs_grading_count" by sections into the
   * "needs_grading_count_by_section" key, defaults to false
   */
  needs_grading_count_by_section: boolean;
  /** All dates associated with the assignment, if applicable */
  all_dates: boolean;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a single assignment
 *
 * Returns the assignment with the given id.
 *
 * Nickname: get_single_assignment
 */
export async function get(options: Options) {
  return await client().fetchAs<Assignment>(
    `/api/v1/courses/{course_id}/assignments/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
