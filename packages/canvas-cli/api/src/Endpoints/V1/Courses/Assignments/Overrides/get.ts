import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

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
  assignment_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type getSearchParameters = Masquerade;

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
 * Get a single assignment override
 *
 * Returns details of the the override with the given id.
 *
 * Nickname: get_single_assignment_override
 */
export async function get(options: Options) {
  const response = await client().fetchAs<AssignmentOverride>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/overrides/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
