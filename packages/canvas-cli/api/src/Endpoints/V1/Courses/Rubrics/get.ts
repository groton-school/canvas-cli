import { client } from '../../../../Client.js';
import { Rubric } from '../../../../Resources/Rubrics.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single rubric
 *
 * Returns the rubric with the given id.
 *
 * Nickname: get_single_rubric_courses
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<Rubric>(
    `/v1/courses/{course_id}/rubrics/{id}`,
    { method: 'GET', params: parameters }
  );
}
