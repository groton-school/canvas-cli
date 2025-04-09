import { Integer } from '';
import { client } from '../../../../Client.js';
import { Admin } from '../../../../Resources/Admins.js';

type listPathParameters = {
  /** ID */
  account_id: string;
};

type listSearchParameters = {
  /**
   * Scope the results to those with user IDs equal to any of the IDs
   * specified here.
   */
  user_id: string[];
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List account admins
 *
 * A paginated list of the admins in the account
 *
 * Nickname: list_account_admins
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/accounts/{account_id}/admins`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
