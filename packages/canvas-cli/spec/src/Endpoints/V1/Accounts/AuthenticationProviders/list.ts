import { AuthenticationProvider } from '../../../../Resources/AuthenticationProviders.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List authentication providers
 *
 * Returns a paginated list of authentication providers
 *
 * Nickname: list_authentication_providers
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/authentication_providers`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
