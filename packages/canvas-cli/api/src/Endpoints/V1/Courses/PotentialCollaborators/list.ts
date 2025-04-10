import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
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
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/potential_collaborators`,
    {
      method: 'GET',
      pathParams
    }
  );
}
