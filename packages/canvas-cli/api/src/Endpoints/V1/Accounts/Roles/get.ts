import { client } from '../../../../Client.js';
import { Role } from '../../../../Resources/Roles.js';

export type getPathParameters = {
  /** ID */
  id: string;
  /** The id of the account containing the role */
  account_id: string;
};

export type getSearchParameters = {
  /**
   * The unique identifier for the role
   *
   * Format: 'int64'
   */
  role_id: number;
  /** The name for the role */
  role: string;
};

type Options = {
  pathParams: getPathParameters;
  searchParams?: getSearchParameters;
};

/**
 * Get a single role
 *
 * Retrieve information about a single role
 *
 * Nickname: get_single_role
 */
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<Role>(`/v1/accounts/{account_id}/roles/{id}`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
