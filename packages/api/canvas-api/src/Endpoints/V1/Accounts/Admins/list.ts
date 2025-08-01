import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Integer } from '../../../../Overrides.js';
import { Admin } from '../../../../Resources/Admins.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Scope the results to those with user IDs equal to any of the IDs
     * specified here.
     */
    user_id: Integer[];
    /**
     * The partial name or full ID of the admins to match and return in the
     * results list. Must be at least 2 characters.
     */
    search_term: string;
    /**
     * When set to true, returns admins who have been deleted
     *
     * Type: boolean
     */
    include_deleted: boolean | string;
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
 * List account admins
 *
 * A paginated list of the admins in the account
 *
 * Nickname: list_account_admins
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Admin[]>(
    `/api/v1/accounts/{account_id}/admins`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
