import { client } from '../../../../../Client.js';

export type reorder_pinned_topics_groupsPathParameters = {
  /** ID */
  group_id: string;
};

export type reorder_pinned_topics_groupsFormParameters = {
  /**
   * The ids of the pinned discussion topics in the desired order. (For
   * example, "order=104,102,103".)
   *
   * Format: 'int64'
   */
  order: number[];
};

type Options = {
  pathParams: reorder_pinned_topics_groupsPathParameters;
} & (
  | {
      params?: Partial<reorder_pinned_topics_groupsFormParameters>;
      strict?: false;
    }
  | {
      params?: reorder_pinned_topics_groupsFormParameters;
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
export async function reorder_pinned_topics_groups({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<void>(
    `/v1/groups/{group_id}/discussion_topics/reorder`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
