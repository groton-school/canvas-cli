import { client } from '../../../../../Client.js';

type mark_topic_as_read_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: mark_topic_as_read_groupsPathParameters;
};

/**
 * Mark topic as read
 *
 * Mark the initial text of the discussion topic as read.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_topic_as_read_groups
 */
export async function mark_topic_as_read_groups({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/groups/{group_id}/discussion_topics/{topic_id}/read`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
