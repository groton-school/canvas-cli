import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
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
 * List potential members
 *
 * A paginated list of the users who can potentially be added to a collaboration
 * in the given context.
 *
 * For courses, this consists of all enrolled users. For groups, it is comprised
 * of the group members plus the admins of the course containing the group.
 *
 * Nickname: list_potential_members_courses
 */
export async function list(options: Options) {
  const response = await client().fetchAs<User[]>(
    `/api/v1/courses/{course_id}/potential_collaborators`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
