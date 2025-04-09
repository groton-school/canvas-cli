import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

type listPathParameters = {
  /** ID */
  group_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List potential members
 *
 * A paginated list of the users who can potentially be added to a collaboration
 * in the given context.
 *
 * For courses, this consists of all enrolled users. For groups, it is comprised
 * of the group members plus the admins of the course containing the group.
 *
 * Nickname: list_potential_members_groups
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/groups/{group_id}/potential_collaborators`,
    {
      method: 'GET',
      pathParams
    }
  );
}
