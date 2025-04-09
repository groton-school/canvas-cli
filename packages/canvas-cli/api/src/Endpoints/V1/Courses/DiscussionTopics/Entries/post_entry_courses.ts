import { client } from '../../../../../Client.js';

type post_entry_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
};

type post_entry_coursesFormParameters = {
  /** The body of the entry. */
  message: string;
  /**
   * A multipart/form-data form-field-style attachment. Attachments larger
   * than 1 kilobyte are subject to quota restrictions.
   */
  attachment: string;
};

type Options = {
  pathParams: post_entry_coursesPathParameters;
  params?: post_entry_coursesFormParameters;
};

/**
 * Post an entry
 *
 * Create a new entry in a discussion topic. Returns a json representation of
 * the created entry (see documentation for 'entries' method) on success.
 *
 * Nickname: post_entry_courses
 */
export async function post_entry_courses({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/discussion_topics/{topic_id}/entries`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
