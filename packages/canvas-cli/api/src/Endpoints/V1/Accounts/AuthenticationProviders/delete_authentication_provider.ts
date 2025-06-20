import { client } from '../../../../Client.js';

export type delete_authentication_providerPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_authentication_providerPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
