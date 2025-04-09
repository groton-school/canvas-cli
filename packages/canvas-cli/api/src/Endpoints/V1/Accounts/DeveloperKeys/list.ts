import { client } from '../../../../Client.js';
import { DeveloperKey } from '../../../../Resources/DeveloperKeys.js';

type listPathParameters = {
  /** ID */
  account_id: string;
};

type listSearchParameters = {
  /**
   * Defaults to false. If true, lists keys inherited from Site Admin (and
   * consortium parent account, if applicable).
   */
  inherited: boolean;
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List Developer Keys
 *
 * List all developer keys created in the current account.
 *
 * Nickname: list_developer_keys
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/developer_keys`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
