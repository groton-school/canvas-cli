import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';
import { BasicUser } from '../../../../../../Resources/Assignments.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  user_id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
