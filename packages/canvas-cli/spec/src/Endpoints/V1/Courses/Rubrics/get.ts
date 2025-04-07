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
export async function get({ parameters }: Options): Promise<Rubric> {
  return await (
    await fetch(`/v1/courses/{course_id}/rubrics/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
