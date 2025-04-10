import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { Role } from '../../../../Resources/Roles.js';

export type listPathParameters = {
  /** The id of the account to retrieve roles for. */
  account_id: string;
};

export type listSearchParameters = {
  /**
   * Filter by role state. If this argument is omitted, only 'active' roles
   * are returned.
   */
  state: string[];
  /**
   * If this argument is true, all roles inherited from parent accounts will
   * be included.
   */
  show_inherited: boolean;
} & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: listSearchParameters;
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
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<Role[]>(`/v1/accounts/{account_id}/roles`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
