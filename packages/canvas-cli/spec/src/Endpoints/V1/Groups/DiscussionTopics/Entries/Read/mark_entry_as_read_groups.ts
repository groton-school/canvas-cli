type Parameters = {
  /**
   * A boolean value to set the entry's forced_read_state. No change is made
   * if this argument is not specified.
   */
  forced_read_state: boolean;
};

type Options = {
  parameters: Parameters;
};

/**
 * Mark entry as read
 *
 * Mark a discussion entry as read.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_entry_as_read_groups
 */
export async function mark_entry_as_read_groups({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/read`,
      { method: 'PUT', body: parameters }
    )
  ).json();
}
