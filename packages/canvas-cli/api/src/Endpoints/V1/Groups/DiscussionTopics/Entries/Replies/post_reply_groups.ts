import { client } from '../../../../../../Client.js';

export type post_reply_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
  /** ID */
  entry_id: string;
};

export type post_reply_groupsFormParameters = {
  /** The body of the entry. */
  message: string;
  /**
   * A multipart/form-data form-field-style attachment. Attachments larger
   * than 1 kilobyte are subject to quota restrictions.
   */
  attachment: string;
};

type Options = {
  pathParams: post_reply_groupsPathParameters;
} & (
  | {
      params?: Partial<post_reply_groupsFormParameters>;
      strict?: false;
    }
  | {
      params: post_reply_groupsFormParameters;
      strict: true;
    }
);

/**
 * Post a reply
 *
 * Add a reply to an entry in a discussion topic. Returns a json representation
 * of the created reply (see documentation for 'replies' method) on success.
 *
 * May require (depending on the topic) that the user has posted in the topic.
 * If it is required, and the user has not posted, will respond with a 403
 * Forbidden status and the body 'require_initial_post'.
 *
 * Nickname: post_reply_groups
 */
export async function post_reply_groups(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/replies`,
    {
      method: 'POST',
      ...options
    }
  );
}
