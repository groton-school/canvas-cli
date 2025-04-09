import { client } from '../../../../../Client.js';

type find_or_create_summary_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
};

type find_or_create_summary_groupsFormParameters = {
  /** Areas or topics for the summary to focus on. */
  userInput: string;
};

type Options = {
  pathParams: find_or_create_summary_groupsPathParameters;
  params?: find_or_create_summary_groupsFormParameters;
};

/**
 * Find or Create Summary
 *
 * Generates a summary for a discussion topic.
 *
 * Nickname: find_or_create_summary_groups
 */
export async function find_or_create_summary_groups({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<void>(
    `/v1/groups/{group_id}/discussion_topics/{topic_id}/summaries`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
