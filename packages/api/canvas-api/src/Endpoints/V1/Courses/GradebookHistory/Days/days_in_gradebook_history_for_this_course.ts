import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { Day } from '../../../../../Resources/GradebookHistory.js';

export type days_in_gradebook_history_for_this_coursePathParameters = {
  /**
   * The id of the contextual course for this API call
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
};

export type days_in_gradebook_history_for_this_courseSearchParameters =
  Masquerade & Paginated;

type Options = {
  pathParams: days_in_gradebook_history_for_this_coursePathParameters;
} & (
  | {
      searchParams?: Partial<days_in_gradebook_history_for_this_courseSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: days_in_gradebook_history_for_this_courseSearchParameters;
      strict: true;
    }
);

/**
 * Days in gradebook history for this course
 *
 * Returns a map of dates to grader/assignment groups
 *
 * Nickname: days_in_gradebook_history_for_this_course
 */
export async function days_in_gradebook_history_for_this_course(
  options: Options
) {
  const response = await client().fetchAs<Day[]>(
    `/api/v1/courses/{course_id}/gradebook_history/days`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
