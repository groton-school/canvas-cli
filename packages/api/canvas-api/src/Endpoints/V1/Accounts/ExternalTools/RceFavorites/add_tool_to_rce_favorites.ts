import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type add_tool_to_rce_favoritesPathParameters = {
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

export type add_tool_to_rce_favoritesSearchParameters = Masquerade;

type Options = {
  pathParams: add_tool_to_rce_favoritesPathParameters;
} & (
  | {
      searchParams?: Partial<add_tool_to_rce_favoritesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: add_tool_to_rce_favoritesSearchParameters;
      strict: true;
    }
);

/**
 * Add tool to RCE Favorites
 *
 * Add the specified editor_button external tool to a preferred location in the
 * RCE for courses in the given account and its subaccounts (if the subaccounts
 * haven't set their own RCE Favorites). Cannot set more than 2 RCE Favorites.
 *
 * Nickname: add_tool_to_rce_favorites
 */
export async function add_tool_to_rce_favorites(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/external_tools/rce_favorites/{id}`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
