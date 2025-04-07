type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Mark topic as read
 *
 * Mark the initial text of the discussion topic as read.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_topic_as_read_courses
 */
export async function mark_topic_as_read_courses({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/discussion_topics/{topic_id}/read`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
