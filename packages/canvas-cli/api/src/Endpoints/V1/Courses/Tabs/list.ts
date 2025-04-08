import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List available tabs for a course or group
 *
 * Returns a paginated list of navigation tabs available in the current context.
 *
 * Nickname: list_available_tabs_for_course_or_group_courses
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/courses/{course_id}/tabs`, {
    method: 'GET',
    params: parameters
  });
}
