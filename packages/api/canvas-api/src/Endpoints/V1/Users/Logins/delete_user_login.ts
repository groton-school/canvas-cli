import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type delete_user_loginPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_user_loginSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_user_loginPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_user_loginPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_user_loginSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_user_loginSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<delete_user_loginSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: delete_user_loginSearchParameters;
        strict: true;
      }
  );

/**
 * Delete a user login
 *
 * Delete an existing login.
 *
 * Nickname: delete_user_login
 */
export async function delete_user_login(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/{user_id}/logins/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
