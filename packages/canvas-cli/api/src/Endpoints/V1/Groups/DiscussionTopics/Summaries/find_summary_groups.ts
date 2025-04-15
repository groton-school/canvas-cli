import { client } from '../../../../../Client.js';

export type find_summary_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: find_summary_groupsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Find Summary
 *
 * Returns the last generated summary for a discussion topic and the current
 * user
 *
 * Nickname: find_summary_groups
 */
export async function find_summary_groups(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/summaries`,
    {
      method: 'GET',
      ...options
    }
  );
}
