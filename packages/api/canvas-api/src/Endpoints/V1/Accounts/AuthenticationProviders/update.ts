import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { AuthenticationProvider } from '../../../../Resources/AuthenticationProviders.js';

export type updatePathParameters = {
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

export type updateSearchParameters = Masquerade;

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      strict: true;
    }
);

/**
 * Update authentication provider
 *
 * Update an authentication provider using the same options as the
 * {api:AuthenticationProvidersController#create Add authentication provider}
 * endpoint. You cannot update an existing provider to a new authentication
 * type.
 *
 * Nickname: update_authentication_provider
 */
export async function update(options: Options) {
  const response = await client().fetchAs<AuthenticationProvider>(
    `/api/v1/accounts/{account_id}/authentication_providers/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
