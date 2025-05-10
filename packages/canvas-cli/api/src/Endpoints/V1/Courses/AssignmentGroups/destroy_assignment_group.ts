import { client } from '../../../../Client.js';
import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

export type destroy_assignment_groupPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_group_id: string;
};

export type destroy_assignment_groupSearchParameters = Partial<{
  /**
   * The ID of an active Assignment Group to which the assignments that are
   * currently assigned to the destroyed Assignment Group will be assigned.
   * NOTE: If this argument is not provided, any assignments in this
   * Assignment Group will be deleted.
   *
   * Format: 'int64'
   */
  move_assignments_to: number;
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
  return await client().fetchAs<AssignmentGroup>(
    `/api/v1/courses/{course_id}/assignment_groups/{assignment_group_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
