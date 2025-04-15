import { client } from '../../../../../Client.js';

export type reorder_quiz_itemsPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type reorder_quiz_itemsFormParameters = {
  /**
   * The associated item's unique identifier
   *
   * Format: 'int64'
   */
  'order[id]': number[];
  /** The type of item is either 'question' or 'group' */
  'order[type]': string[];
};

type Options = {
  pathParams: reorder_quiz_itemsPathParameters;
} & (
  | {
      params?: Partial<reorder_quiz_itemsFormParameters>;
      strict?: false;
    }
  | {
      params: reorder_quiz_itemsFormParameters;
      strict: true;
    }
);

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
export async function reorder_quiz_items(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/quizzes/{id}/reorder`,
    {
      method: 'POST',
      ...options
    }
  );
}
