import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { ContextExternalTool } from '../../../../Resources/ExternalTools.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /** The partial name of the tools to match and return. */
    search_term: string;
    /**
     * If true, then only tools that are meant to be selectable are returned.
     *
     * Type: boolean
     */
    selectable: boolean | string;
    /**
     * If true, then include tools installed in all accounts above the current
     * context
     *
     * Type: boolean
     */
    include_parents: boolean | string;
    /**
     * The placement type to filter by.
     *
     * Return all tools at the current context as well as all tools from the
     * parent, and filter the tools list to only those with a placement of
     * 'editor_button'
     */
    placement: string;
  }>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List external tools
 *
 * Returns the paginated list of external tools for the current context. See the
 * get request docs for a single tool for a list of properties on an external
 * tool.
 *
 * Nickname: list_external_tools_groups
 */
export async function list(options: Options) {
  const response = await client().fetchAs<ContextExternalTool[]>(
    `/api/v1/groups/{group_id}/external_tools`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
