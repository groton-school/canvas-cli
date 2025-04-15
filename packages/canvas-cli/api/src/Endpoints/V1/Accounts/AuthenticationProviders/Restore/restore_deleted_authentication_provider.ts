import { client } from '../../../../../Client.js';
import { AuthenticationProvider } from '../../../../../Resources/AuthenticationProviders.js';

export type restore_deleted_authentication_providerPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: restore_deleted_authentication_providerPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Restore a deleted authentication provider
 *
 * Restore an authentication provider back to active that was previously
 * deleted. Only available to admins who can manage_account_settings for given
 * root account.
 *
 * Nickname: restore_deleted_authentication_provider
 */
export async function restore_deleted_authentication_provider(
  options: Options
) {
  return await client().fetchAs<AuthenticationProvider>(
    `/api/v1/accounts/{account_id}/authentication_providers/{id}/restore`,
    {
      method: 'PUT',
      ...options
    }
  );
}
