import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type getPathParameters = {
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
  quiz_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * Associations to include with the quiz submission.
     *
     *
     *
     *
     */
    include: string[];
  }>;

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
 * Get a single quiz submission.
 *
 * Get a single quiz submission.

<b>200 OK</b> response code is returned if the request was successful.
 *
 * nickname: get_single_quiz_submission
 *
 * 
 *
 * 
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
