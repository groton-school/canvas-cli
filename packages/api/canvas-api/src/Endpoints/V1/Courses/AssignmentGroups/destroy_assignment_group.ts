import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

export type destroy_assignment_groupPathParameters = {
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
  assignment_group_id: string | number;
};

export type destroy_assignment_groupSearchParameters = Masquerade &
  Partial<{
    /**
     * The ID of an active Assignment Group to which the assignments that are
     * currently assigned to the destroyed Assignment Group will be assigned.
     * NOTE: If this argument is not provided, any assignments in this
     * Assignment Group will be deleted.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    move_assignments_to: number | string;
  }>;

type Options = {
  pathParams: destroy_assignment_groupPathParameters;
} & (
  | {
      searchParams?: Partial<destroy_assignment_groupSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: destroy_assignment_groupSearchParameters;
      strict: true;
    }
);

/**
 * Destroy an Assignment Group
 *
 * Deletes the assignment group with the given id.
 *
 * Nickname: destroy_assignment_group
 */
export async function destroy_assignment_group(options: Options) {
  const response = await client().fetchAs<AssignmentGroup>(
    `/api/v1/courses/{course_id}/assignment_groups/{assignment_group_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
