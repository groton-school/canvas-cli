import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type mark_all_topic_as_read_groupsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type mark_all_topic_as_read_groupsSearchParameters = Masquerade;

type Options = {
  pathParams: mark_all_topic_as_read_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<mark_all_topic_as_read_groupsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_all_topic_as_read_groupsSearchParameters;
      strict: true;
    }
);

/**
 * Mark all topic as read
 *
 * Mark the initial text of all the discussion topics as read in the context.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_all_topic_as_read_groups
 */
export async function mark_all_topic_as_read_groups(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/read_all`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
