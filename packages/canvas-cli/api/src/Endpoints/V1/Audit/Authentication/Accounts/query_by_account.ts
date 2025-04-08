import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Query by account.
 *
 * List authentication events for a given account.
 *
 * Nickname: query_by_account
 */
export async function query_by_account({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/audit/authentication/accounts/{account_id}`,
    { method: 'GET', params: parameters }
  );
}
