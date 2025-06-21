import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
  /** ID */
  id: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
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
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
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
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
