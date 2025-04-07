type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete an entry
 *
 * Delete a discussion entry.
 *
 * The entry must have been created by the current user, or the current user
 * must have admin rights to the discussion. If the delete is not allowed, a 401
 * will be returned.
 *
 * The discussion will be marked deleted, and the user_id and message will be
 * cleared out.
 *
 * Nickname: delete_entry_groups
 */
export async function delete_entry_groups({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{id}`,
      { method: 'DELETE', body: parameters }
    )
  ).json();
}
