import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type reorder_quiz_itemsPathParameters = {
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

export type reorder_quiz_itemsSearchParameters = Masquerade;

export type reorder_quiz_itemsFormParameters = Masquerade & {
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
   * The type of item is either &#x27;question&#x27; or &#x27;group&#x27;
   *
   *
   *
   *
   */
  'order[type]': string[];
};

type Options = (
  | {
      path: reorder_quiz_itemsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: reorder_quiz_itemsPathParameters;
    }
) &
  (
    | {
        query?: Partial<reorder_quiz_itemsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<reorder_quiz_itemsSearchParameters>;
        body?: Partial<reorder_quiz_itemsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<reorder_quiz_itemsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: reorder_quiz_itemsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: reorder_quiz_itemsSearchParameters;
          }
      ) &
        (
          | {
              body: reorder_quiz_itemsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: reorder_quiz_itemsFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Reorder quiz items
 *
 * Change order of the quiz questions or groups within the quiz

<b>204 No Content</b> response code is returned if the reorder was successful.
 *
 * nickname: reorder_quiz_items
 *
 * 
 *
 * 
 */
export async function reorder_quiz_items(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/quizzes/{id}/reorder`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
