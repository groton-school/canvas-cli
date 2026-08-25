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
  group_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  topic_id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * If &quot;all_dates&quot; is passed, all dates associated with graded discussions&#x27;
assignments will be included.
if &quot;sections&quot; is passed, includes the course sections that are associated
with the topic, if the topic is specific to certain sections of the course.
If &quot;sections_user_count&quot; is passed, then:
  (a) If sections were asked for *and* the topic is specific to certain
      course sections, includes the number of users in each
      section. (as part of the section json asked for above)
  (b) Else, includes at the root level the total number of users in the
      topic&#x27;s context (group or course) that the topic applies to.
If &quot;overrides&quot; is passed, the overrides for the assignment will be included
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
 * Get a single topic
 *
 * Returns data on an individual discussion topic. See the List action for the response formatting.
 *
 * nickname: get_single_topic_groups
 *
 *
 *
 *
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
