import { client } from '../../../Client.js';
import { Account } from '../../../Resources/Accounts.js';

type getPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get a single account
 *
 * Retrieve information on an individual account, given by id or sis
 * sis_account_id.
 *
 * Nickname: get_single_account
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<Account>(`/v1/accounts/{id}`, {
    method: 'GET',
    pathParams
  });
}
