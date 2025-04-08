import { client } from '../../../../Client.js';
import { Quiz } from '../../../../Resources/Quizzes.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List quizzes in a course
 *
 * Returns the paginated list of Quizzes in this course.
 *
 * Nickname: list_quizzes_in_course
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/courses/{course_id}/quizzes`, {
    method: 'GET',
    params: parameters
  });
}
