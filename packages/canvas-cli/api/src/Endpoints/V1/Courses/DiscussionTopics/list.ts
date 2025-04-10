import { client } from '../../../../Client.js';
import { DiscussionTopic } from '../../../../Resources/DiscussionTopics.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = {
  /**
   * If "all_dates" is passed, all dates associated with graded discussions'
   * assignments will be included. if "sections" is passed, includes the
   * course sections that are associated with the topic, if the topic is
   * specific to certain sections of the course. If "sections_user_count" is
   * passed, then: (a) If sections were asked for _and_ the topic is specific
   * to certain course sections, includes the number of users in each section.
   * (as part of the section json asked for above) (b) Else, includes at the
   * root level the total number of users in the topic's context (group or
   * course) that the topic applies to. If "overrides" is passed, the
   * overrides for the assignment will be included
   */
  include: string[];
  /**
   * Determines the order of the discussion topic list. Defaults to
   * "position".
   */
  order_by: string;
  /**
   * Only return discussion topics in the given state(s). Defaults to
   * including all topics. Filtering is done after pagination, so pages may be
   * smaller than requested if topics are filtered. Can pass multiple states
   * as comma separated string.
   */
  scope: string;
  /** Return announcements instead of discussion topics. Defaults to false */
  only_announcements: boolean;
  /**
   * The state of the discussion topic to return. Currently only supports
   * unread state.
   */
  filter_by: string;
  /** The partial title of the discussion topics to match and return. */
  search_term: string;
  /**
   * For students, exclude topics that are locked by module progression.
   * Defaults to false.
   */
  exclude_context_module_locked_topics: boolean;
};

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: listSearchParameters;
      strict: true;
    }
);

/**
 * List discussion topics
 *
 * Returns the paginated list of discussion topics for this course or group.
 *
 * Nickname: list_discussion_topics_courses
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/discussion_topics`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
