import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { Account } from '../../../../Resources/Accounts.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
};

export type getSearchParameters = Partial<{
  /**
   * If true, the entire account tree underneath this account will be returned
   * (though still paginated). If false, only direct sub-accounts of this
   * account will be returned. Defaults to false.
   */
  recursive: boolean;
  /**
   * Sorts the accounts by id or name. Only applies when recursive is false.
   * Defaults to id.
   */
  order: string;
  /**
   * Array of additional information to include.
   *
   * "course_count":: returns the number of courses directly under each
   * account "sub_account_count":: returns the number of sub-accounts directly
   * under each account
   */
  include: string[];
}> &
  Paginated;

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
 * Get the sub-accounts of an account
 *
 * List accounts that are sub-accounts of the given account.
 *
 * Nickname: get_sub_accounts_of_account
 */
export async function get(options: Options) {
  return await client().fetchAs<Account[]>(
    `/api/v1/accounts/{account_id}/sub_accounts`,
    {
      method: 'GET',
      ...options
    }
  );
}
