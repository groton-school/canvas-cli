import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Quiz } from '../../../../Resources/Quizzes.js';

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
  id: string | number;
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
 * Get a single quiz
 *
 * Returns the quiz with the given id.
 *
 * Nickname: get_single_quiz
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Quiz>(
    `/api/v1/courses/{course_id}/quizzes/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
