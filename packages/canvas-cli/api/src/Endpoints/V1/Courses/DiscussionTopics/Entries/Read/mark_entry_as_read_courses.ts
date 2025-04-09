import { client } from '../../../../../../Client.js';

export type mark_entry_as_read_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
  /** ID */
  entry_id: string;
};

export type mark_entry_as_read_coursesFormParameters = {
  /**
   * A boolean value to set the entry's forced_read_state. No change is made
   * if this argument is not specified.
   */
  forced_read_state: boolean;
};

type Options = {
  pathParams: mark_entry_as_read_coursesPathParameters;
  params?: mark_entry_as_read_coursesFormParameters;
};

/**
 * Mark entry as read
 *
 * Mark a discussion entry as read.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_entry_as_read_courses
 */
export async function mark_entry_as_read_courses({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/read`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
