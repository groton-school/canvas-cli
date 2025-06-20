import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { AuthenticationProvider } from '../../../../Resources/AuthenticationProviders.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List authentication providers
 *
 * Returns a paginated list of authentication providers
 *
 * Nickname: list_authentication_providers
 */
export async function list(options: Options) {
  const response = await client().fetchAs<AuthenticationProvider[]>(
    `/api/v1/accounts/{account_id}/authentication_providers`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
