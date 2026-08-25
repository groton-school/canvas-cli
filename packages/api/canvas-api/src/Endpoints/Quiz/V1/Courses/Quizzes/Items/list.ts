import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { QuizItem } from '../../../../../../Resources/NewQuizItems.js';

export type listPathParameters = {
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
     * no description
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  assignment_id: number | string;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List quiz items
 *
 * Get a list of items in a new quiz.
 *
 * nickname: list_quiz_items
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<QuizItem[]>(
    `/api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
