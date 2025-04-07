import { AuthenticationProvider } from '../../../../Resources/AuthenticationProviders.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get authentication provider
 *
 * Get the specified authentication provider
 *
 * Nickname: get_authentication_provider
 */
export async function get({
  parameters
}: Options): Promise<AuthenticationProvider> {
  return await (
    await fetch(`/v1/accounts/{account_id}/authentication_providers/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
