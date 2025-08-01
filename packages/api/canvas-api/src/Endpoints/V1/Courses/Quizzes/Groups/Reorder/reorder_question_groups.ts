import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';

export type reorder_question_groupsPathParameters = {
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
  quiz_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type reorder_question_groupsSearchParameters = Masquerade;

export type reorder_question_groupsFormParameters = Masquerade & {
  /**
   * The associated item's unique identifier
   *
   * Format: 'int64'
   */
  'order[id]': number | string[];
  /** The type of item is always 'question' for a group */
  'order[type]': string[];
};

type Options = {
  pathParams: reorder_question_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<reorder_question_groupsSearchParameters>;
      params?: Partial<reorder_question_groupsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: reorder_question_groupsSearchParameters;
      params: reorder_question_groupsFormParameters;
      strict: true;
    }
);

/**
 * Reorder question groups
 *
 * Change the order of the quiz questions within the group
 *
 * <b>204 No Content<b> response code is returned if the reorder was successful.
 *
 * Nickname: reorder_question_groups
 */
export async function reorder_question_groups(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}/reorder`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
