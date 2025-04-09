import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get visible course navigation tools for a single course
 *
 * Get a list of external tools with the course_navigation placement that have
 * not been hidden in course settings and whose visibility settings apply to the
 * requesting user. These tools are the same that appear in the course
 * navigation.
 *
 * The response format is the same as Get visible course navigation tools.
 *
 * Nickname: get_visible_course_navigation_tools_for_single_course
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/external_tools/visible_course_nav_tools`,
    {
      method: 'GET',
      pathParams
    }
  );
}
