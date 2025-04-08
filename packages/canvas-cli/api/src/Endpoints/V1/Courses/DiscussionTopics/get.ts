import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single topic
 *
 * Returns data on an individual discussion topic. See the List action for the
 * response formatting.
 *
 * Nickname: get_single_topic_courses
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/discussion_topics/{topic_id}`,
    { method: 'GET', params: parameters }
  );
}
