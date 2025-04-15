import { client } from '../../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /** The name of the question group. */
  'quiz_groups[name]': string[];
  /**
   * The number of questions to randomly select for this group.
   *
   * Format: 'int64'
   */
  'quiz_groups[pick_count]': number[];
  /**
   * The number of points to assign to each question in the group.
   *
   * Format: 'int64'
   */
  'quiz_groups[question_points]': number[];
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a question group
 *
 * Update a question group
 *
 * Nickname: update_question_group
 */
export async function update(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
}
