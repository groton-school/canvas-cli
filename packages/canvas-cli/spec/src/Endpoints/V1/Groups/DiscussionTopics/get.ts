type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single topic
 *
 * Returns data on an individual discussion topic. See the List action for the
 * response formatting.
 *
 * Nickname: get_single_topic_groups
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/groups/{group_id}/discussion_topics/{topic_id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
