import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { NewQuiz } from '../../../../../Resources/NewQuizzes.js';

export type delete_new_quizPathParameters = {
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
};

export type delete_new_quizSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_new_quizPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_new_quizPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_new_quizSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_new_quizSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_new_quizSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_new_quizSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a new quiz
 *
 * Delete a single new quiz.
 *
 * nickname: delete_new_quiz
 *
 *
 *
 *
 */
export async function delete_new_quiz(options: Options) {
  const response = await client().fetchAs<NewQuiz>(
    `/api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
