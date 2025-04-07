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
 * Nickname: delete_topic_groups
 */
export async function delete_topic_groups({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/groups/{group_id}/discussion_topics/{topic_id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
