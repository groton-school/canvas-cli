import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { AuthenticationProvider } from '../../../../Resources/AuthenticationProviders.js';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
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
 * Get authentication provider
 *
 * Get the specified authentication provider
 *
 * nickname: get_authentication_provider
 *
 *
 *
 *
 */
export async function get(options: Options) {
  const response = await client().fetchAs<AuthenticationProvider>(
    `/api/v1/accounts/{account_id}/authentication_providers/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
