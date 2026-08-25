import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type delete_question_groupPathParameters = {
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

export type delete_question_groupSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_question_groupPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_question_groupPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_question_groupSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_question_groupSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_question_groupSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_question_groupSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a question group
 *
 * Delete a question group

<b>204 No Content<b> response code is returned if the deletion was successful.
 *
 * nickname: delete_question_group
 *
 * 
 *
 * 
 */
export async function delete_question_group(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
