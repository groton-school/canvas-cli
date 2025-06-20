import { client } from '../../../../../Client.js';

export type mark_all_entries_as_read_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
};

export type mark_all_entries_as_read_coursesFormParameters = {
  /**
   * A boolean value to set all of the entries' forced_read_state. No change
   * is made if this argument is not specified.
   */
  forced_read_state: boolean;
};

type Options = {
  pathParams: mark_all_entries_as_read_coursesPathParameters;
} & (
  | {
      params?: Partial<mark_all_entries_as_read_coursesFormParameters>;
      strict?: false;
    }
  | {
      params: mark_all_entries_as_read_coursesFormParameters;
      strict: true;
    }
);

/**
 * Mark all entries as read
 *
 * Mark the discussion topic and all its entries as read.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_all_entries_as_read_courses
 */
export async function mark_all_entries_as_read_courses(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/read_all`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
