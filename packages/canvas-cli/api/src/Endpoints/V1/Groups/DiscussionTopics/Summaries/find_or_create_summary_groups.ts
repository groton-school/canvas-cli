import { client } from '../../../../../Client.js';

type Parameters = {
  /** Areas or topics for the summary to focus on. */
  userInput: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Find or Create Summary
 *
 * Generates a summary for a discussion topic.
 *
 * Nickname: find_or_create_summary_groups
 */
export async function find_or_create_summary_groups({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/groups/{group_id}/discussion_topics/{topic_id}/summaries`,
    { method: 'POST', params: parameters }
  );
}
