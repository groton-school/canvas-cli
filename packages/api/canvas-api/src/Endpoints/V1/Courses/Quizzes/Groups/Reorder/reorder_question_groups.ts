import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type reorder_question_groupsPathParameters = {
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

export type reorder_question_groupsSearchParameters = Masquerade;

export type reorder_question_groupsFormParameters = Masquerade & {
  /**
     * The associated item&#x27;s unique identifier
     *
     * 

format: 'int64'
     *
     * 
     */
  'order[id]': number | string[];
  /**
   * The type of item is always &#x27;question&#x27; for a group
   *
   *
   *
   *
   */
  'order[type]': string[];
};

type Options = (
  | {
      path: reorder_question_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: reorder_question_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<reorder_question_groupsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<reorder_question_groupsSearchParameters>;
        body?: Partial<reorder_question_groupsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<reorder_question_groupsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: reorder_question_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: reorder_question_groupsSearchParameters;
          }
      ) &
        (
          | {
              body: reorder_question_groupsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: reorder_question_groupsFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Reorder question groups
 *
 * Change the order of the quiz questions within the group

<b>204 No Content<b> response code is returned if the reorder was successful.
 *
 * nickname: reorder_question_groups
 *
 * 
 *
 * 
 */
export async function reorder_question_groups(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}/reorder`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
