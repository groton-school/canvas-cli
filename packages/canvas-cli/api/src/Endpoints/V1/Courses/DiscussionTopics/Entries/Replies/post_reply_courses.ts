import { client } from '../../../../../../Client.js';

type Parameters = {
  /** The body of the entry. */
  message: string;
  /**
   * A multipart/form-data form-field-style attachment. Attachments larger
   * than 1 kilobyte are subject to quota restrictions.
   */
  attachment: string;
};

type Options = {
  parameters: Parameters;
};

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
 * Nickname: post_reply_courses
 */
export async function post_reply_courses({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/replies`,
    { method: 'POST', params: parameters }
  );
}
