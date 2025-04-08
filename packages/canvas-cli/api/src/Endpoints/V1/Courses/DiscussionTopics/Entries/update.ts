import { client } from '../../../../../Client.js';

type Parameters = {
  /** The updated body of the entry. */
  message: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update an entry
 *
 * Update an existing discussion entry.
 *
 * The entry must have been created by the current user, or the current user
 * must have admin rights to the discussion. If the edit is not allowed, a 401
 * will be returned.
 *
 * Nickname: update_entry_courses
 */
export async function update({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{id}`,
    { method: 'PUT', params: parameters }
  );
}
