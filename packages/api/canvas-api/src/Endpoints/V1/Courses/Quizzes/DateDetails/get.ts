import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { LearningObjectDates } from '../../../../../Resources/LearningObjectDates.js';

export type getPathParameters = {
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

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a learning object's date information
 *
 * Get a learning object's date-related information, including due date,
 * availability dates, override status, and a paginated list of all assignment
 * overrides for the item.
 *
 * Nickname: get_learning_object_s_date_information_quizzes
 */
export async function get(options: Options) {
  const response = await client().fetchAs<LearningObjectDates>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/date_details`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
