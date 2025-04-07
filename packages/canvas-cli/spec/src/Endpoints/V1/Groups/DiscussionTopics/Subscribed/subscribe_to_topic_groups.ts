type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Subscribe to a topic
 *
 * Subscribe to a topic to receive notifications about new entries
 *
 * On success, the response will be 204 No Content with an empty body
 *
 * Nickname: subscribe_to_topic_groups
 */
export async function subscribe_to_topic_groups({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/groups/{group_id}/discussion_topics/{topic_id}/subscribed`,
      { method: 'PUT', body: parameters }
    )
  ).json();
}
