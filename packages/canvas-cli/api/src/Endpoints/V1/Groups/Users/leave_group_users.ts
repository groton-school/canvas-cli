import { client } from '../../../../Client.js';

export type leave_group_usersPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: leave_group_usersPathParameters;
};

/**
 * Leave a group
 *
 * Leave a group if you are allowed to leave (some groups, such as sets of
 * course groups created by teachers, cannot be left). You may also use 'self'
 * in place of a membership_id.
 *
 * Nickname: leave_group_users
 */
export async function leave_group_users({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/groups/{group_id}/users/{user_id}`, {
    method: 'DELETE',
    pathParams
  });
}
