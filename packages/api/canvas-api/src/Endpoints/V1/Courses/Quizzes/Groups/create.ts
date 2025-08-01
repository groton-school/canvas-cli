import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type createPathParameters = {
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
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The name of the question group. */
  'quiz_groups[name]': string[];
  /**
   * The number of questions to randomly select for this group.
   *
   * Format: 'int64'
   */
  'quiz_groups[pick_count]': number | string[];
  /**
   * The number of points to assign to each question in the group.
   *
   * Format: 'int64'
   */
  'quiz_groups[question_points]': number | string[];
  /**
   * The id of the assessment question bank to pull questions from.
   *
   * Format: 'int64'
   */
  'quiz_groups[assessment_question_bank_id]': number | string[];
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a question group
 *
 * Create a new question group for this quiz
 *
 * <b>201 Created</b> response code is returned if the creation was successful.
 *
 * Nickname: create_question_group
 */
export async function create(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/groups`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
