import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The purpose of the token. */
  'token[purpose]': string;
  /**
   * The time at which the token will expire.
   *
   * Format: date-time
   */
  'token[expires_at]': string;
  /**
   * The scopes to associate with the token. Ignored if the default developer
   * key does not have the "enable scopes" option enabled. In such cases, the
   * token will inherit the user's permissions instead.
   */
  'token[scopes]': string[];
};

type Options = (
  | {
      path: createPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: createPathParameters;
    }
) &
  (
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<createSearchParameters>;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: createSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: createSearchParameters;
          }
      ) &
        (
          | {
              body: createFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: createFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Create an access token
 *
 * Create a new access token for the specified user. If the user is not the
 * current user, the token will be created as "pending", and must be activated
 * by the user before it can be used.
 *
 * Nickname: create_access_token
 */
export async function create(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/{user_id}/tokens`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
