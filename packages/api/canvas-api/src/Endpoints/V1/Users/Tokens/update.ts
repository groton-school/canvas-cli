import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type updatePathParameters = {
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

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The purpose of the token. */
  'token[purpose]': string;
  /**
   * The time at which the token will expire.
   *
   * Format: date-time
   */
  'token[expires_at]': string;
  /** The scopes to associate with the token. */
  'token[scopes]': string[];
  /**
   * Regenerate the actual token.
   *
   * Type: boolean
   */
  'token[regenerate]': boolean | string;
};

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Update an access token
 *
 * Update an existing access token.
 *
 * The ID can be the actual database ID of the token, or the 'token_hint' value.
 *
 * Regenerating an expired token requires a new expiration date.
 *
 * Nickname: update_access_token
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/{user_id}/tokens/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
