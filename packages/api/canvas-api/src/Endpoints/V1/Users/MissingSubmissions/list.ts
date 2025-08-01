import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Assignment } from '../../../../Resources/Assignments.js';

export type listPathParameters = {
  /**
   * The student's ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Return missing submissions for the given observed user. Must be
     * accompanied by course_ids[]. The user making the request must be
     * observing the observed user in all the courses specified by
     * course_ids[].
     */
    observed_user_id: string;
    /**
     * "planner_overrides":: Optionally include the assignment's associated
     * planner override, if it exists, for the current user. These will be
     * returned under a +planner_override+ key "course":: Optionally include the
     * assignments' courses
     */
    include: string[];
    /**
     * "submittable":: Only return assignments that the current user can submit
     * (i.e. filter out locked assignments) "current_grading_period":: Only
     * return missing assignments that are in the current grading period
     */
    filter: string[];
    /**
     * Optionally restricts the list of past-due assignments to only those
     * associated with the specified course IDs. Required if observed_user_id is
     * passed.
     */
    course_ids: string[];
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
 * List Missing Submissions
 *
 * A paginated list of past-due assignments for which the student does not have
 * a submission. The user sending the request must either be the student, an
 * admin or a parent observer using the parent app
 *
 * Nickname: list_missing_submissions
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Assignment[]>(
    `/api/v1/users/{user_id}/missing_submissions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
