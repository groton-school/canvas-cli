import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { Quiz } from '../../../../Resources/Quizzes.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = {
  /** The partial title of the quizzes to match and return. */
  search_term: string;
} & Paginated;

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
 * List quizzes in a course
 *
 * Returns the paginated list of Quizzes in this course.
 *
 * Nickname: list_quizzes_in_course
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<Quiz[]>(`/v1/courses/{course_id}/quizzes`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
