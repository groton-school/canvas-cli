import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type remove_tool_from_rce_favoritesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type remove_tool_from_rce_favoritesSearchParameters = Masquerade;

type Options = {
  pathParams: remove_tool_from_rce_favoritesPathParameters;
} & (
  | {
      searchParams?: Partial<remove_tool_from_rce_favoritesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: remove_tool_from_rce_favoritesSearchParameters;
      strict: true;
    }
);

/**
 * Remove tool from RCE Favorites
 *
 * Remove the specified external tool from a preferred location in the RCE for
 * the given account
 *
 * Nickname: remove_tool_from_rce_favorites
 */
export async function remove_tool_from_rce_favorites(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/external_tools/rce_favorites/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
