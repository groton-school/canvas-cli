import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

export type delete_assignment_overridePathParameters = {
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

export type delete_assignment_overrideSearchParameters = Masquerade;

type Options = {
  pathParams: delete_assignment_overridePathParameters;
} & (
  | {
      searchParams?: Partial<delete_assignment_overrideSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_assignment_overrideSearchParameters;
      strict: true;
    }
);

/**
 * Delete an assignment override
 *
 * Deletes an override and returns its former details.
 *
 * Nickname: delete_assignment_override
 */
export async function delete_assignment_override(options: Options) {
  const response = await client().fetchAs<AssignmentOverride>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/overrides/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
