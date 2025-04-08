import { client } from '../../../../Client.js';
import { DeveloperKey } from '../../../../Resources/DeveloperKeys.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List Developer Keys
 *
 * List all developer keys created in the current account.
 *
 * Nickname: list_developer_keys
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/developer_keys`,
    { method: 'GET', params: parameters }
  );
}
