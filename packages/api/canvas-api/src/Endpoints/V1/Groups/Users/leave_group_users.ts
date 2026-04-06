import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

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

type Options = (
  | {
      path: leave_group_usersPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: leave_group_usersPathParameters;
    }
) &
  (
    | {
        query?: Partial<leave_group_usersSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<leave_group_usersSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: leave_group_usersSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: leave_group_usersSearchParameters;
          }
      ) & {
        strict: true;
      })
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/users/{user_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
