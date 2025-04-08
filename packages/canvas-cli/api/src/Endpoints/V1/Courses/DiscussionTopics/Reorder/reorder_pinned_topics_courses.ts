import { client } from '../../../../../Client.js';

type Parameters = {
  /**
   * The ids of the pinned discussion topics in the desired order. (For
   * example, "order=104,102,103".)
   *
   * Format: 'int64'
   */
  order: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Reorder pinned topics
 *
 * Puts the pinned discussion topics in the specified order. All pinned topics
 * should be included.
 *
 * Nickname: reorder_pinned_topics_courses
 */
export async function reorder_pinned_topics_courses({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/discussion_topics/reorder`,
    { method: 'POST', params: parameters }
  );
}
