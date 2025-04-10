import { client } from '../../../Client.js';
import { Account } from '../../../Resources/Accounts.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
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
 * Get account
 *
 * Retrieve information on an individual account, given by local or global ID.
 *
 * Nickname: get_account
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<Account>(`/lti/accounts/{account_id}`, {
    method: 'GET',
    pathParams
  });
}
