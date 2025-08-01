import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Role } from '../../../../Resources/Roles.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
  /**
   * The id of the account containing the role
   *
   * Type: string
   */
  account_id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * The unique identifier for the role
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    role_id: number | string;
    /** The name for the role */
    role: string;
  }>;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a single role
 *
 * Retrieve information about a single role
 *
 * Nickname: get_single_role
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Role>(
    `/api/v1/accounts/{account_id}/roles/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
