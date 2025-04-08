import { client } from '../../../../../Client.js';

type Parameters = {
  /**
   * The associated item's unique identifier
   *
   * Format: 'int64'
   */
  'order[id]': string[];
  /** The type of item is either 'question' or 'group' */
  'order[type]': string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Reorder quiz items
 *
 * Change order of the quiz questions or groups within the quiz
 *
 * <b>204 No Content</b> response code is returned if the reorder was
 * successful.
 *
 * Nickname: reorder_quiz_items
 */
export async function reorder_quiz_items({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{id}/reorder`,
    { method: 'POST', params: parameters }
  );
}
