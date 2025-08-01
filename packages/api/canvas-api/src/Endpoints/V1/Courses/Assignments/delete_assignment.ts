import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Assignment } from '../../../../Resources/Assignments.js';

export type delete_assignmentPathParameters = {
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

export type delete_assignmentSearchParameters = Masquerade;

type Options = {
  pathParams: delete_assignmentPathParameters;
} & (
  | {
      searchParams?: Partial<delete_assignmentSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_assignmentSearchParameters;
      strict: true;
    }
);

/**
 * Delete an assignment
 *
 * Delete the given assignment.
 *
 * Nickname: delete_assignment
 */
export async function delete_assignment(options: Options) {
  const response = await client().fetchAs<Assignment>(
    `/api/v1/courses/{course_id}/assignments/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
