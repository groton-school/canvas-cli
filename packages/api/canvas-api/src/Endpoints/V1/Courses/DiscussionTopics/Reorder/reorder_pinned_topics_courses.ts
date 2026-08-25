import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type reorder_pinned_topics_coursesPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
};

export type reorder_pinned_topics_coursesSearchParameters = Masquerade;

export type reorder_pinned_topics_coursesFormParameters = Masquerade & {
  /**
     * The ids of the pinned discussion topics in the desired order.
(For example, &quot;order&#x3D;104,102,103&quot;.)
     *
     * 

format: 'int64'
     *
     * 
     */
  order: number | string[];
};

type Options = (
  | {
      path: reorder_pinned_topics_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: reorder_pinned_topics_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<reorder_pinned_topics_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<reorder_pinned_topics_coursesSearchParameters>;
        body?: Partial<reorder_pinned_topics_coursesFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<reorder_pinned_topics_coursesFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: reorder_pinned_topics_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: reorder_pinned_topics_coursesSearchParameters;
          }
      ) &
        (
          | {
              body: reorder_pinned_topics_coursesFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: reorder_pinned_topics_coursesFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Reorder pinned topics
 *
 * Puts the pinned discussion topics in the specified order.
All pinned topics should be included.
 *
 * nickname: reorder_pinned_topics_courses
 *
 * 
 *
 * 
 */
export async function reorder_pinned_topics_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/discussion_topics/reorder`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
