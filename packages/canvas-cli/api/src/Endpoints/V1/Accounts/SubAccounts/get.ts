import { client } from '../../../../Client.js';
import { Account } from '../../../../Resources/Accounts.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
};

export type getSearchParameters = {
  /**
   * If true, the entire account tree underneath this account will be returned
   * (though still paginated). If false, only direct sub-accounts of this
   * account will be returned. Defaults to false.
   */
  recursive: boolean;
  /**
   * Array of additional information to include.
   *
   * "course_count":: returns the number of courses directly under each
   * account "sub_account_count":: returns the number of sub-accounts directly
   * under each account
   */
  include: string[];
};

type Options = {
  pathParams: getPathParameters;
  searchParams?: getSearchParameters;
};

/**
 * Get the sub-accounts of an account
 *
 * List accounts that are sub-accounts of the given account.
 *
 * Nickname: get_sub_accounts_of_account
 */
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/sub_accounts`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
