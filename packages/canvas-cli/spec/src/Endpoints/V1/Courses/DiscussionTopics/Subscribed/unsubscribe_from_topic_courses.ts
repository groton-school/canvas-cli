type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Unsubscribe from a topic
 *
 * Unsubscribe from a topic to stop receiving notifications about new entries
 *
 * On success, the response will be 204 No Content with an empty body
 *
 * Nickname: unsubscribe_from_topic_courses
 */
export async function unsubscribe_from_topic_courses({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/discussion_topics/{topic_id}/subscribed`,
      { method: 'DELETE', body: parameters }
    )
  ).json();
}
