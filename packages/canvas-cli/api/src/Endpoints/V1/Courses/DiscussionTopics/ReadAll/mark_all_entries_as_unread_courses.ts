import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type mark_all_entries_as_unread_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  topic_id: string | number;
};

export type mark_all_entries_as_unread_coursesSearchParameters = Masquerade &
  Partial<{
    /**
     * A boolean value to set all of the entries' forced_read_state. No change
     * is made if this argument is not specified.
     *
     * Type: boolean
     */
    forced_read_state: boolean | string;
  }>;

type Options = {
  pathParams: mark_all_entries_as_unread_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<mark_all_entries_as_unread_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_all_entries_as_unread_coursesSearchParameters;
      strict: true;
    }
);

/**
 * Mark all entries as unread
 *
 * Mark the discussion topic and all its entries as unread.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_all_entries_as_unread_courses
 */
export async function mark_all_entries_as_unread_courses(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/read_all`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
