import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { QuizQuestion } from '../../../../../Resources/QuizQuestions.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  quiz_id: string | number;
  /**
   * The quiz question unique identifier.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
};

export type getSearchParameters = Masquerade;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get a single quiz question
 *
 * Returns the quiz question with the given id
 *
 * Nickname: get_single_quiz_question
 */
export async function get(options: Options) {
  const response = await client().fetchAs<QuizQuestion>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/questions/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
