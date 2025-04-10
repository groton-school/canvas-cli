import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { Day } from '../../../../../Resources/GradebookHistory.js';

export type days_in_gradebook_history_for_this_coursePathParameters = {
  /**
   * The id of the contextual course for this API call
   *
   * Format: 'int64'
   */
  course_id: number;
};

export type days_in_gradebook_history_for_this_courseSearchParameters =
  Paginated;

type Options = {
  pathParams: days_in_gradebook_history_for_this_coursePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function days_in_gradebook_history_for_this_course({
  pathParams
}: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/gradebook_history/days`,
    {
      method: 'GET',
      pathParams
    }
  );
}
