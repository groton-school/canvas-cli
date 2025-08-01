import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';

export type disable_summary_groupsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  topic_id: string | number;
};

export type disable_summary_groupsSearchParameters = Masquerade;

type Options = {
  pathParams: disable_summary_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<disable_summary_groupsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: disable_summary_groupsSearchParameters;
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
