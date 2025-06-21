import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { Admin } from '../../../../../Resources/Admins.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
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
 * List my admin roles
 *
 * A paginated list of the current user's roles in the account. The results are
 * the same as those returned by the {api:AdminsController#index List account
 * admins} endpoint with +user_id+ set to +self+, except the "Admins - Add /
 * Remove" permission is not required.
 *
 * Nickname: list_my_admin_roles
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Admin[]>(
    `/api/v1/accounts/{account_id}/admins/self`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
