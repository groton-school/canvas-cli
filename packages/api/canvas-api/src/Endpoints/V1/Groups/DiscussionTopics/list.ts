import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { DiscussionTopic } from '../../../../Resources/DiscussionTopics.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
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
    /**
     * Determines the order of the discussion topic list. Defaults to &quot;position&quot;.
     *
     *
     *
     *
     */
    order_by: string;
    /**
     * Only return discussion topics in the given state(s). Defaults to including
all topics. Filtering is done after pagination, so pages
may be smaller than requested if topics are filtered.
Can pass multiple states as comma separated string.
     *
     * 
     *
     * 
     */
    scope: string;
    /**
     * Return announcements instead of discussion topics. Defaults to false
     *
     * type: boolean
     *
     *
     */
    only_announcements: boolean | string;
    /**
     * The state of the discussion topic to return. Currently only supports unread state.
     *
     *
     *
     *
     */
    filter_by: string;
    /**
     * The partial title of the discussion topics to match and return.
     *
     *
     *
     *
     */
    search_term: string;
    /**
     * For students, exclude topics that are locked by module progression.
Defaults to false.
     *
     * type: boolean
     *
     * 
     */
    exclude_context_module_locked_topics: boolean | string;
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
 * List discussion topics
 *
 * Returns the paginated list of discussion topics for this course or group.
 *
 * nickname: list_discussion_topics_groups
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<DiscussionTopic[]>(
    `/api/v1/groups/{group_id}/discussion_topics`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
