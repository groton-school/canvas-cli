import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Add tool to RCE Favorites
 *
 * Add the specified editor_button external tool to a preferred location in the
 * RCE for courses in the given account and its subaccounts (if the subaccounts
 * haven't set their own RCE Favorites). Cannot set more than 2 RCE Favorites.
 *
 * Nickname: add_tool_to_rce_favorites
 */
export async function add_tool_to_rce_favorites({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/external_tools/rce_favorites/{id}`,
    { method: 'POST', params: parameters }
  );
}
