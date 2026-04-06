import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { AuthenticationProvider } from '../../../../Resources/AuthenticationProviders.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: listSearchParameters;
        strict: true;
      }
  );

/**
 * List authentication providers
 *
 * Returns a paginated list of authentication providers
 *
 * Nickname: list_authentication_providers
 */
export async function list(options: Options) {
  const response = await client().fetchAs<AuthenticationProvider[]>(
    `/api/v1/accounts/{account_id}/authentication_providers`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
