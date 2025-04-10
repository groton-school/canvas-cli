import { client } from '../../../../Client.js';
import { AuthenticationProvider } from '../../../../Resources/AuthenticationProviders.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get authentication provider
 *
 * Get the specified authentication provider
 *
 * Nickname: get_authentication_provider
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<AuthenticationProvider>(
    `/v1/accounts/{account_id}/authentication_providers/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
