import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type unmark_tool_as_rce_favoritePathParameters = {
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

export type unmark_tool_as_rce_favoriteSearchParameters = Masquerade;

type Options = {
  pathParams: unmark_tool_as_rce_favoritePathParameters;
} & (
  | {
      searchParams?: Partial<unmark_tool_as_rce_favoriteSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: unmark_tool_as_rce_favoriteSearchParameters;
      strict: true;
    }
);

/**
 * Unmark tool as RCE Favorite
 *
 * Unmark the specified external tool as a favorite in the RCE editor for the
 * given account. The tool will remain available but will no longer appear in
 * the preferred favorites location.
 *
 * Nickname: unmark_tool_as_rce_favorite
 */
export async function unmark_tool_as_rce_favorite(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/external_tools/rce_favorites/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
