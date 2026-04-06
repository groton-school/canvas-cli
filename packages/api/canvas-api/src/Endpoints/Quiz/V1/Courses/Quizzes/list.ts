import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { NewQuiz } from '../../../../../Resources/NewQuizzes.js';

export type listPathParameters = {
  /**
   * No description
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
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
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List new quizzes
 *
 * Get a list of new quizzes.
 *
 * Nickname: list_new_quizzes
 */
export async function list(options: Options) {
  const response = await client().fetchAs<NewQuiz[]>(
    `/api/quiz/v1/courses/{course_id}/quizzes`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
