import { client } from '../../../../Client.js';

export type getSearchParameters = {
  /**
   * List of context_codes to retrieve visible course nav tools for (for
   * example, +course_123+). Only courses are presently supported.
   */
  context_codes: string[];
};

type Options =
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    };

/**
 * Get visible course navigation tools
 *
 * Get a list of external tools with the course_navigation placement that have
 * not been hidden in course settings and whose visibility settings apply to the
 * requesting user. These tools are the same that appear in the course
 * navigation.
 *
 * The response format is the same as for List external tools, but with
 * additional context_id and context_name fields on each element in the array.
 *
 * Nickname: get_visible_course_navigation_tools
 */
export async function get({ searchParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/external_tools/visible_course_nav_tools`,
    {
      method: 'GET',
      searchParams
    }
  );
}
