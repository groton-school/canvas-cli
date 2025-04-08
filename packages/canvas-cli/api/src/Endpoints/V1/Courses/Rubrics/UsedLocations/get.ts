import { UsedLocations } from '';
import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get the courses and assignments for
 *
 * Returns the rubric with the given id.
 *
 * Nickname: get_courses_and_assignments_for_courses
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<UsedLocations>(
    `/v1/courses/{course_id}/rubrics/{id}/used_locations`,
    { method: 'GET', params: parameters }
  );
}
