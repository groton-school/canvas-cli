import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Role } from '../../../../Resources/Roles.js';

export type getPathParameters = {
  /** ID */
  id: string;
  /** The id of the account containing the role */
  account_id: string;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * The unique identifier for the role
     *
     * Format: 'int64'
     */
    role_id: number;
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
