import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

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
  assignment_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

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
 * List assignment overrides
 *
 * Returns the paginated list of overrides for this assignment that target
 * sections/groups/students visible to the current user.
 *
 * Nickname: list_assignment_overrides
 */
export async function list(options: Options) {
  const response = await client().fetchAs<AssignmentOverride[]>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/overrides`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
