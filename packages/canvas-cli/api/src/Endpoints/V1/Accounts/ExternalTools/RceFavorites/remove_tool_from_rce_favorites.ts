import { client } from '../../../../../Client.js';

type remove_tool_from_rce_favoritesPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: remove_tool_from_rce_favoritesPathParameters;
};

/**
 * Remove tool from RCE Favorites
 *
 * Remove the specified external tool from a preferred location in the RCE for
 * the given account
 *
 * Nickname: remove_tool_from_rce_favorites
 */
export async function remove_tool_from_rce_favorites({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/external_tools/rce_favorites/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
