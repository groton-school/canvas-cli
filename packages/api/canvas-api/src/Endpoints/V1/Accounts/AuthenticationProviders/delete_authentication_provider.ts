import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type delete_authentication_providerPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_authentication_providerSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_authentication_providerPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_authentication_providerPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_authentication_providerSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_authentication_providerSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<delete_authentication_providerSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: delete_authentication_providerSearchParameters;
        strict: true;
      }
  );

/**
 * Delete authentication provider
 *
 * Delete the config
 *
 * Nickname: delete_authentication_provider
 */
export async function delete_authentication_provider(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/authentication_providers/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
