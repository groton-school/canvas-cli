import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type mark_tool_as_rce_favoritePathParameters = {
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

export type mark_tool_as_rce_favoriteSearchParameters = Masquerade;

type Options = {
  pathParams: mark_tool_as_rce_favoritePathParameters;
} & (
  | {
      searchParams?: Partial<mark_tool_as_rce_favoriteSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_tool_as_rce_favoriteSearchParameters;
      strict: true;
    }
);

/**
 * Mark tool as RCE Favorite
 *
 * Mark the specified editor_button external tool as a favorite in the RCE
 * editor for courses in the given account and its subaccounts (if the
 * subaccounts haven't set their own RCE Favorites). This places the tool in a
 * preferred location in the RCE. Cannot mark more than 2 tools as RCE
 * Favorites.
 *
 * Nickname: mark_tool_as_rce_favorite
 */
export async function mark_tool_as_rce_favorite(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/external_tools/rce_favorites/{id}`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
