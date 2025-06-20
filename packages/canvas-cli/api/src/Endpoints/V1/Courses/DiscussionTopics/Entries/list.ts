import { client } from '../../../../../Client.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List topic entries
 *
 * Retrieve the (paginated) top-level entries in a discussion topic.
 *
 * May require (depending on the topic) that the user has posted in the topic.
 * If it is required, and the user has not posted, will respond with a 403
 * Forbidden status and the body 'require_initial_post'.
 *
 * Will include the 10 most recent replies, if any, for each entry returned.
 *
 * If the topic is a root topic with children corresponding to groups of a group
 * assignment, entries from those subtopics for which the user belongs to the
 * corresponding group will be returned.
 *
 * Ordering of returned entries is newest-first by posting timestamp (reply
 * activity is ignored).
 *
 * Nickname: list_topic_entries_courses
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/entries`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
