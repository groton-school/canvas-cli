import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type delete_access_tokenPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  user_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type delete_access_tokenSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_access_tokenPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_access_tokenPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_access_tokenSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_access_tokenSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_access_tokenSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_access_tokenSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete an access token
 *
 * The ID can be the actual database ID of the token, or the 'token_hint' value.
 *
 * nickname: delete_access_token
 *
 *
 *
 *
 */
export async function delete_access_token(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/{user_id}/tokens/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
