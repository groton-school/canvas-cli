import { client } from '../../../../../../Client.js';

type Parameters = {
  /**
   * The associated item's unique identifier
   *
   * Format: 'int64'
   */
  'order[id]': string[];
  /** The type of item is always 'question' for a group */
  'order[type]': string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Reorder question groups
 *
 * Change the order of the quiz questions within the group
 *
 * <b>204 No Content<b> response code is returned if the reorder was successful.
 *
 * Nickname: reorder_question_groups
 */
export async function reorder_question_groups({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}/reorder`,
    { method: 'POST', params: parameters }
  );
}
