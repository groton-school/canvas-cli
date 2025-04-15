import { client } from '../../../../Client.js';

export type leave_group_membershipsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  membership_id: string;
};

type Options = {
  pathParams: leave_group_membershipsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/memberships/{membership_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
