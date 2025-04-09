import { client } from '../../../../Client.js';
import { AuthenticationProvider } from '../../../../Resources/AuthenticationProviders.js';

type updatePathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: updatePathParameters;
};

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
export async function update({ pathParams }: Options) {
  return await client().fetchAs<AuthenticationProvider>(
    `/v1/accounts/{account_id}/authentication_providers/{id}`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
