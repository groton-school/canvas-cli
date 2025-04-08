import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single external tool
 *
 * Returns the specified external tool.
 *
 * Nickname: get_single_external_tool_accounts
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/external_tools/{external_tool_id}`,
    { method: 'GET', params: parameters }
  );
}
