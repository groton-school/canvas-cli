import { client } from '../../../../../../Client.js';

type reorder_question_groupsPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
  /** ID */
  id: string;
};

type reorder_question_groupsFormParameters = {
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
  pathParams: reorder_question_groupsPathParameters;
  params?: reorder_question_groupsFormParameters;
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
export async function reorder_question_groups({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}/reorder`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
