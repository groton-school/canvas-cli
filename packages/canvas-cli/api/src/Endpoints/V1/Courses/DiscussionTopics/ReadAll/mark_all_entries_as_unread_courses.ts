import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

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
export async function mark_all_entries_as_unread_courses({
  parameters
}: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/discussion_topics/{topic_id}/read_all`,
    { method: 'DELETE', params: parameters }
  );
}
