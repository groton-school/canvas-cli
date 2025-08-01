import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type leave_group_usersPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type leave_group_usersSearchParameters = Masquerade;

type Options = {
  pathParams: leave_group_usersPathParameters;
} & (
  | {
      searchParams?: Partial<leave_group_usersSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: leave_group_usersSearchParameters;
      strict: true;
    }
);

/**
 * Leave a group
 *
 * Leave a group if you are allowed to leave (some groups, such as sets of
 * course groups created by teachers, cannot be left). You may also use 'self'
 * in place of a membership_id.
 *
 * Nickname: leave_group_users
 */
export async function leave_group_users(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/users/{user_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
