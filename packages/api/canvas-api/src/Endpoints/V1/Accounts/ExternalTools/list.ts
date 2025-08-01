import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade &
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
    /** The placement type to filter by. */
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
 * Nickname: list_external_tools_accounts
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/external_tools`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
