import { client } from '../../../../../../Client.js';

type mark_entry_as_unread_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
  /** ID */
  entry_id: string;
};

type mark_entry_as_unread_coursesSearchParameters = {
  /**
   * A boolean value to set the entry's forced_read_state. No change is made
   * if this argument is not specified.
   */
  forced_read_state: boolean;
};

type Options = {
  pathParams: mark_entry_as_unread_coursesPathParameters;
  searchParams?: mark_entry_as_unread_coursesSearchParameters;
};

/**
 * Mark entry as unread
 *
 * Mark a discussion entry as unread.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_entry_as_unread_courses
 */
export async function mark_entry_as_unread_courses({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/read`,
    {
      method: 'DELETE',
      pathParams,
      searchParams
    }
  );
}
