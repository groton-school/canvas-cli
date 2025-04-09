import { client } from '../../../../../Client.js';

export type post_entry_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
};

export type post_entry_groupsFormParameters = {
  /** The body of the entry. */
  message: string;
  /**
   * A multipart/form-data form-field-style attachment. Attachments larger
   * than 1 kilobyte are subject to quota restrictions.
   */
  attachment: string;
};

type Options = {
  pathParams: post_entry_groupsPathParameters;
  params?: post_entry_groupsFormParameters;
};

/**
 * Post an entry
 *
 * Create a new entry in a discussion topic. Returns a json representation of
 * the created entry (see documentation for 'entries' method) on success.
 *
 * Nickname: post_entry_groups
 */
export async function post_entry_groups({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/groups/{group_id}/discussion_topics/{topic_id}/entries`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
