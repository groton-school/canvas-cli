import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

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

type Options = (
  | {
      path: leave_group_membershipsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: leave_group_membershipsPathParameters;
    }
) &
  (
    | {
        query?: Partial<leave_group_membershipsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<leave_group_membershipsSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<leave_group_membershipsSearchParameters>;
        /** @deprecated Use {Options.query} */
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/memberships/{membership_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
