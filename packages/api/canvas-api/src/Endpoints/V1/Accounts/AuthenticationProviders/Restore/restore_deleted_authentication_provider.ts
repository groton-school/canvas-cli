import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { AuthenticationProvider } from '../../../../../Resources/AuthenticationProviders.js';

export type restore_deleted_authentication_providerPathParameters = {
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

export type restore_deleted_authentication_providerSearchParameters =
  Masquerade;

type Options = {
  pathParams: restore_deleted_authentication_providerPathParameters;
} & (
  | {
      searchParams?: Partial<restore_deleted_authentication_providerSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: restore_deleted_authentication_providerSearchParameters;
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
  const response = await client().fetchAs<AuthenticationProvider>(
    `/api/v1/accounts/{account_id}/authentication_providers/{id}/restore`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
