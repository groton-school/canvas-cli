import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';
import { BasicUser } from '../../../../../../Resources/Assignments.js';

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
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
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
 * List group members for a student on an assignment
 *
 * Returns student ids and names for the group.
 *
 * Nickname: list_group_members_for_student_on_assignment
 */
export async function list(options: Options) {
  const response = await client().fetchAs<BasicUser[]>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/users/{user_id}/group_members`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
