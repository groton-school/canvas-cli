import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

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

type Options = {
  pathParams: delete_authentication_providerPathParameters;
} & (
  | {
      searchParams?: Partial<delete_authentication_providerSearchParameters>;
      strict?: false;
    }
  | {
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
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/authentication_providers/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
