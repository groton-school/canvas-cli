import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { Submission } from '../../../../../Resources/Submissions.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
};

export type listSearchParameters = {
  /**
   * Associations to include with the group. "group" will add group_id and
   * group_name.
   */
  include: string[];
  /** If this argument is true, the response will be grouped by student groups. */
  grouped: boolean;
} & Paginated;

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
 * List assignment submissions
 *
 * A paginated list of all existing submissions for an assignment.
 *
 * Nickname: list_assignment_submissions_courses
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<Submission[]>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/submissions`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
