import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  topic_id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
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
  }>;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a single topic
 *
 * Returns data on an individual discussion topic. See the List action for the
 * response formatting.
 *
 * Nickname: get_single_topic_courses
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
