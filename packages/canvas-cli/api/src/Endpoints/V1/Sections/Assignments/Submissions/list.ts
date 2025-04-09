import { client } from '../../../../../Client.js';
import { Submission } from '../../../../../Resources/Submissions.js';

type listPathParameters = {
  /** ID */
  section_id: string;
  /** ID */
  assignment_id: string;
};

type listSearchParameters = {
  /**
   * Associations to include with the group. "group" will add group_id and
   * group_name.
   */
  include: string[];
  /** If this argument is true, the response will be grouped by student groups. */
  grouped: boolean;
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List assignment submissions
 *
 * A paginated list of all existing submissions for an assignment.
 *
 * Nickname: list_assignment_submissions_sections
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/sections/{section_id}/assignments/{assignment_id}/submissions`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
