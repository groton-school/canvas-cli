import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List external tools
 *
 * Returns the paginated list of external tools for the current context. See the
 * get request docs for a single tool for a list of properties on an external
 * tool.
 *
 * Nickname: list_external_tools_accounts
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/external_tools`,
    { method: 'GET', params: parameters }
  );
}
