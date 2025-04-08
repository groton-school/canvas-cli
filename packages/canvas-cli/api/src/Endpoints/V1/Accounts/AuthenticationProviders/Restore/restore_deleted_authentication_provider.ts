import { client } from '../../../../../Client.js';
import { AuthenticationProvider } from '../../../../../Resources/AuthenticationProviders.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Restore a deleted authentication provider
 *
 * Restore an authentication provider back to active that was previously
 * deleted. Only available to admins who can manage_account_settings for given
 * root account.
 *
 * Nickname: restore_deleted_authentication_provider
 */
export async function restore_deleted_authentication_provider({
  parameters
}: Options) {
  return await client().fetchAs<AuthenticationProvider>(
    `/v1/accounts/{account_id}/authentication_providers/{id}/restore`,
    { method: 'PUT', params: parameters }
  );
}
