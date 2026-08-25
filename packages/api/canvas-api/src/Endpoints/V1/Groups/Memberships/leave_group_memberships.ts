import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type leave_group_membershipsPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<leave_group_membershipsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: leave_group_membershipsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: leave_group_membershipsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Leave a group
 *
 * Leave a group if you are allowed to leave (some groups, such as sets of
course groups created by teachers, cannot be left). You may also use 'self'
in place of a membership_id.
 *
 * nickname: leave_group_memberships
 *
 * 
 *
 * 
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
