import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Quiz } from '../../../../Resources/Quizzes.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /** The partial title of the quizzes to match and return. */
    search_term: string;
  }>;

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
 * List quizzes in a course
 *
 * Returns the paginated list of Quizzes in this course.
 *
 * Nickname: list_quizzes_in_course
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Quiz[]>(
    `/api/v1/courses/{course_id}/quizzes`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
