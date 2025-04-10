import { client } from '../../../../../Client.js';

export type mark_all_topic_as_read_groupsPathParameters = {
  /** ID */
  group_id: string;
};

type Options = {
  pathParams: mark_all_topic_as_read_groupsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function mark_all_topic_as_read_groups({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/groups/{group_id}/discussion_topics/read_all`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
