import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { QuizItem } from '../../../../../../Resources/NewQuizItems.js';

export type getPathParameters = {
  /**
     * no description
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  course_id: number | string;
  /**
     * The id of the assignment associated with the quiz.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  assignment_id: number | string;
  /**
     * The id of the item associated with the quiz.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  item_id: number | string;
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get a quiz item
 *
 * Get details about a single item in a new quiz.
 *
 * nickname: get_quiz_item
 *
 *
 *
 *
 */
export async function get(options: Options) {
  const response = await client().fetchAs<QuizItem>(
    `/api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
