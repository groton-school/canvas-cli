import { client } from '../../../../Client.js';
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
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/authentication_providers`,
    { method: 'GET', params: parameters }
  );
}
