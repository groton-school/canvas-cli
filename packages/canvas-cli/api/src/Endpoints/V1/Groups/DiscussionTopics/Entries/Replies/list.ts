import { client } from '../../../../../../Client.js';

export type listPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
  /** ID */
  entry_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List entry replies
 *
 * Retrieve the (paginated) replies to a top-level entry in a discussion topic.
 *
 * May require (depending on the topic) that the user has posted in the topic.
 * If it is required, and the user has not posted, will respond with a 403
 * Forbidden status and the body 'require_initial_post'.
 *
 * Ordering of returned entries is newest-first by creation timestamp.
 *
 * Nickname: list_entry_replies_groups
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/replies`,
    {
      method: 'GET',
      pathParams
    }
  );
}
