import { client } from '../../../../Client.js';

export type listPathParameters = {
  /** ID */
  group_id: string;
};

export type listSearchParameters = {
  /** The partial name of the tools to match and return. */
  search_term: string;
  /** If true, then only tools that are meant to be selectable are returned. */
  selectable: boolean;
  /**
   * If true, then include tools installed in all accounts above the current
   * context
   */
  include_parents: boolean;
  /** The placement type to filter by. */
  placement: string;
};

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
  return await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/external_tools`,
    {
      method: 'GET',
      ...options
    }
  );
}
