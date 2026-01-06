import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Assignment } from '../../../../Resources/Assignments.js';

export type getPathParameters = {
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
  id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * Associations to include with the assignment. The "assignment_visibility"
     * option requires that the Differentiated Assignments course feature be
     * turned on. If "observed_users" is passed, submissions for observed users
     * will also be included. For "score_statistics" to be included, the
     * "submission" option must also be set. The "peer_review" option requires
     * that the Peer Review Grading course feature be turned on.
     */
    include: string[];
    /**
     * Apply assignment overrides to the assignment, defaults to true.
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
     * All dates associated with the assignment, if applicable
     *
     * Type: boolean
     */
    all_dates: boolean | string;
  }>;

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
  const response = await client().fetchAs<Assignment>(
    `/api/v1/courses/{course_id}/assignments/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
