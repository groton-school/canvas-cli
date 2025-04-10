import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
};

export type getSearchParameters = {
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
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a single topic
 *
 * Returns data on an individual discussion topic. See the List action for the
 * response formatting.
 *
 * Nickname: get_single_topic_groups
 */
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/groups/{group_id}/discussion_topics/{topic_id}`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
