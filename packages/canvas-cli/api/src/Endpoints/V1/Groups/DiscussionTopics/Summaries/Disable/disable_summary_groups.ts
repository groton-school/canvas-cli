import { client } from '../../../../../../Client.js';

export type disable_summary_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: disable_summary_groupsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Disable summary
 *
 * Deprecated, to remove after VICE-5047 gets merged Disables the summary for a
 * discussion topic.
 *
 * Nickname: disable_summary_groups
 */
export async function disable_summary_groups(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/summaries/disable`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
