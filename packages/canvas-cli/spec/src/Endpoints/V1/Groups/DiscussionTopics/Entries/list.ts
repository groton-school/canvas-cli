type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List topic entries
 *
 * Retrieve the (paginated) top-level entries in a discussion topic.
 *
 * May require (depending on the topic) that the user has posted in the topic.
 * If it is required, and the user has not posted, will respond with a 403
 * Forbidden status and the body 'require_initial_post'.
 *
 * Will include the 10 most recent replies, if any, for each entry returned.
 *
 * If the topic is a root topic with children corresponding to groups of a group
 * assignment, entries from those subtopics for which the user belongs to the
 * corresponding group will be returned.
 *
 * Ordering of returned entries is newest-first by posting timestamp (reply
 * activity is ignored).
 *
 * Nickname: list_topic_entries_groups
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/groups/{group_id}/discussion_topics/{topic_id}/entries`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
