import { client } from '../../../Client.js';
import { Account } from '../../../Resources/Accounts.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get a single account
 *
 * Retrieve information on an individual account, given by id or sis
 * sis_account_id.
 *
 * Nickname: get_single_account
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Account>(`/api/v1/accounts/{id}`, {
    method: 'GET',
    ...options
  });
  return response;
}
