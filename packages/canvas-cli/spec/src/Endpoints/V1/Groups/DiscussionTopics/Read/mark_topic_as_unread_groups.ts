type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Mark topic as unread
 *
 * Mark the initial text of the discussion topic as unread.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_topic_as_unread_groups
 */
export async function mark_topic_as_unread_groups({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/groups/{group_id}/discussion_topics/{topic_id}/read`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
