import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
};

export type getSearchParameters = Masquerade;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get current settings for account or course
 *
 * Update multiple modules in an account.
 *
 * nickname: get_current_settings_for_account_or_course_accounts
 *
 *
 *
 *
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/csp_settings`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
