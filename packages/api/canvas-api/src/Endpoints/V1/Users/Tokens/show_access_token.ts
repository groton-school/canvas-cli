import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type show_access_tokenPathParameters = {
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

export type show_access_tokenSearchParameters = Masquerade;

type Options = (
  | {
      path: show_access_tokenPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_access_tokenPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_access_tokenSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_access_tokenSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<show_access_tokenSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: show_access_tokenSearchParameters;
        strict: true;
      }
  );

/**
 * Show an access token
 *
 * The ID can be the actual database ID of the token, or the 'token_hint' value.
 *
 * Nickname: show_access_token
 */
export async function show_access_token(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/{user_id}/tokens/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
