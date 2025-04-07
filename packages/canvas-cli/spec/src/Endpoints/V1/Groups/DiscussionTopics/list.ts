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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/groups/{group_id}/discussion_topics`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
