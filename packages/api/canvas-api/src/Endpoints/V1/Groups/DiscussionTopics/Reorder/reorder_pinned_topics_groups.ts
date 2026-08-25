import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type reorder_pinned_topics_groupsPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_id: string | number;
};

export type reorder_pinned_topics_groupsSearchParameters = Masquerade;

export type reorder_pinned_topics_groupsFormParameters = Masquerade & {
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
      path: reorder_pinned_topics_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: reorder_pinned_topics_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<reorder_pinned_topics_groupsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<reorder_pinned_topics_groupsSearchParameters>;
        body?: Partial<reorder_pinned_topics_groupsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<reorder_pinned_topics_groupsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: reorder_pinned_topics_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: reorder_pinned_topics_groupsSearchParameters;
          }
      ) &
        (
          | {
              body: reorder_pinned_topics_groupsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: reorder_pinned_topics_groupsFormParameters;
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
 * nickname: reorder_pinned_topics_groups
 *
 * 
 *
 * 
 */
export async function reorder_pinned_topics_groups(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/discussion_topics/reorder`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
