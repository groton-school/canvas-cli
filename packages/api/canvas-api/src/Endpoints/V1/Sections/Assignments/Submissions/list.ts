import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { Submission } from '../../../../../Resources/Submissions.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  section_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  assignment_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Associations to include with the group. "group" will add group_id and
     * group_name.
     */
    include: string[];
    /**
     * If this argument is true, the response will be grouped by student groups.
     *
     * Type: boolean
     */
    grouped: boolean | string;
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
 * List assignment submissions
 *
 * A paginated list of all existing submissions for an assignment.
 *
 * Nickname: list_assignment_submissions_sections
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Submission[]>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submissions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
