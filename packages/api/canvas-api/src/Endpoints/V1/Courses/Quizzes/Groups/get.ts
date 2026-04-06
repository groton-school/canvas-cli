import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { QuizGroup } from '../../../../../Resources/QuizQuestionGroups.js';

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
 * Get a single quiz group
 *
 * Returns details of the quiz group with the given id.
 *
 * Nickname: get_single_quiz_group
 */
export async function get(options: Options) {
  const response = await client().fetchAs<QuizGroup>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
