import { client } from '../../../../Client.js';
import { Quiz } from '../../../../Resources/Quizzes.js';

type listPathParameters = {
  /** ID */
  course_id: string;
};

type listSearchParameters = {
  /** The partial title of the quizzes to match and return. */
  search_term: string;
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List quizzes in a course
 *
 * Returns the paginated list of Quizzes in this course.
 *
 * Nickname: list_quizzes_in_course
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/courses/{course_id}/quizzes`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
