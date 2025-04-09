import { client } from '../../../../../Client.js';

type delete_entry_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_entry_coursesPathParameters;
};

/**
 * Delete an entry
 *
 * Delete a discussion entry.
 *
 * The entry must have been created by the current user, or the current user
 * must have admin rights to the discussion. If the delete is not allowed, a 401
 * will be returned.
 *
 * The discussion will be marked deleted, and the user_id and message will be
 * cleared out.
 *
 * Nickname: delete_entry_courses
 */
export async function delete_entry_courses({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
