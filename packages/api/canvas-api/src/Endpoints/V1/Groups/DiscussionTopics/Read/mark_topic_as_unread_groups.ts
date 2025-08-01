import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type mark_topic_as_unread_groupsPathParameters = {
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

export type mark_topic_as_unread_groupsSearchParameters = Masquerade;

type Options = {
  pathParams: mark_topic_as_unread_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<mark_topic_as_unread_groupsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_topic_as_unread_groupsSearchParameters;
      strict: true;
    }
);

/**
 * Mark topic as unread
 *
 * Mark the initial text of the discussion topic as unread.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_topic_as_unread_groups
 */
export async function mark_topic_as_unread_groups(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/read`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
