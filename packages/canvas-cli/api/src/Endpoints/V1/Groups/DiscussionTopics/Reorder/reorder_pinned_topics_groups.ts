import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type reorder_pinned_topics_groupsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type reorder_pinned_topics_groupsSearchParameters = Masquerade;

export type reorder_pinned_topics_groupsFormParameters = Masquerade & {
  /**
   * The ids of the pinned discussion topics in the desired order. (For
   * example, "order=104,102,103".)
   *
   * Format: 'int64'
   */
  order: number | string[];
};

type Options = {
  pathParams: reorder_pinned_topics_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<reorder_pinned_topics_groupsSearchParameters>;
      params?: Partial<reorder_pinned_topics_groupsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: reorder_pinned_topics_groupsSearchParameters;
      params: reorder_pinned_topics_groupsFormParameters;
      strict: true;
    }
);

/**
 * Reorder pinned topics
 *
 * Puts the pinned discussion topics in the specified order. All pinned topics
 * should be included.
 *
 * Nickname: reorder_pinned_topics_groups
 */
export async function reorder_pinned_topics_groups(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/reorder`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
