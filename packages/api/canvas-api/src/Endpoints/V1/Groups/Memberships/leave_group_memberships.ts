import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type leave_group_membershipsPathParameters = {
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
  membership_id: string | number;
};

export type leave_group_membershipsSearchParameters = Masquerade;

type Options = {
  pathParams: leave_group_membershipsPathParameters;
} & (
  | {
      searchParams?: Partial<leave_group_membershipsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: leave_group_membershipsSearchParameters;
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
 * Nickname: leave_group_memberships
 */
export async function leave_group_memberships(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/memberships/{membership_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
