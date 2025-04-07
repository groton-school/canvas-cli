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
 * Nickname: subscribe_to_topic_courses
 */
export async function subscribe_to_topic_courses({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/discussion_topics/{topic_id}/subscribed`,
      { method: 'PUT', body: parameters }
    )
  ).json();
}
