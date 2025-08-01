import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Role } from '../../../../Resources/Roles.js';

export type listPathParameters = {
  /**
   * The id of the account to retrieve roles for.
   *
   * Type: string
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Filter by role state. If this argument is omitted, only 'active' roles
     * are returned.
     */
    state: string[];
    /**
     * If this argument is true, all roles inherited from parent accounts will
     * be included.
     *
     * Type: boolean
     */
    show_inherited: boolean | string;
  }>;

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
 * List roles
 *
 * A paginated list of the roles available to an account.
 *
 * Nickname: list_roles
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Role[]>(
    `/api/v1/accounts/{account_id}/roles`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
