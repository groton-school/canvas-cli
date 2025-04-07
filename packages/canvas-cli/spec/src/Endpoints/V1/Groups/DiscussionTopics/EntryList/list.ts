type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List entries
 *
 * Retrieve a paginated list of discussion entries, given a list of ids.
 *
 * May require (depending on the topic) that the user has posted in the topic.
 * If it is required, and the user has not posted, will respond with a 403
 * Forbidden status and the body 'require_initial_post'.
 *
 * Nickname: list_entries_groups
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/groups/{group_id}/discussion_topics/{topic_id}/entry_list`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
