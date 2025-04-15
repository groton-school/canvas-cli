import { client } from '../../../../../Client.js';

export type mark_topic_as_unread_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: mark_topic_as_unread_groupsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/read`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
