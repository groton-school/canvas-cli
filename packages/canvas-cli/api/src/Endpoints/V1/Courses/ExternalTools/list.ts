import { client } from '../../../../Client.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
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
 * Nickname: list_external_tools_courses
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/external_tools`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
