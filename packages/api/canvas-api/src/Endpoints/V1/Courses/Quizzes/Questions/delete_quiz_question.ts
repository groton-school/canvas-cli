import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type delete_quiz_questionPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
     * The associated quiz&#x27;s unique identifier
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  quiz_id: number | string;
  /**
     * The quiz question&#x27;s unique identifier
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  id: number | string;
};

export type delete_quiz_questionSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_quiz_questionPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_quiz_questionPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_quiz_questionSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_quiz_questionSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_quiz_questionSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_quiz_questionSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a quiz question
 *
 * <b>204 No Content</b> response code is returned if the deletion was successful.
 *
 * nickname: delete_quiz_question
 *
 *
 *
 *
 */
export async function delete_quiz_question(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/questions/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
