import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { AuthenticationProvider } from '../../../../Resources/AuthenticationProviders.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
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
