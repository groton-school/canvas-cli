import { client } from '../../../../Client.js';

type delete_authentication_providerPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_authentication_providerPathParameters;
};

/**
 * Delete authentication provider
 *
 * Delete the config
 *
 * Nickname: delete_authentication_provider
 */
export async function delete_authentication_provider({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/authentication_providers/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
