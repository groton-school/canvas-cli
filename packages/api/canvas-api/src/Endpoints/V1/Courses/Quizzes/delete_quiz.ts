import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Quiz } from '../../../../Resources/Quizzes.js';

export type delete_quizPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type delete_quizSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_quizPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_quizPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_quizSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_quizSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_quizSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_quizSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a quiz
 *
 * Deletes a quiz and returns the deleted quiz object.
 *
 * nickname: delete_quiz
 *
 *
 *
 *
 */
export async function delete_quiz(options: Options) {
  const response = await client().fetchAs<Quiz>(
    `/api/v1/courses/{course_id}/quizzes/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
