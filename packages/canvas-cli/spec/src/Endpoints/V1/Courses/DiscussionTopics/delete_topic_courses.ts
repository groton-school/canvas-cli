type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a topic
 *
 * Deletes the discussion topic. This will also delete the assignment, if it's
 * an assignment discussion.
 *
 * Nickname: delete_topic_courses
 */
export async function delete_topic_courses({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/discussion_topics/{topic_id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
