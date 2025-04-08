import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Find Summary
 *
 * Returns the last generated summary for a discussion topic and the current
 * user
 *
 * Nickname: find_summary_groups
 */
export async function find_summary_groups({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/groups/{group_id}/discussion_topics/{topic_id}/summaries`,
    { method: 'GET', params: parameters }
  );
}
