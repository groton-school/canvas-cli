import { client } from '../../../../Client.js';
import { DiscussionTopic } from '../../../../Resources/DiscussionTopics.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List discussion topics
 *
 * Returns the paginated list of discussion topics for this course or group.
 *
 * Nickname: list_discussion_topics_groups
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/groups/{group_id}/discussion_topics`,
    { method: 'GET', params: parameters }
  );
}
