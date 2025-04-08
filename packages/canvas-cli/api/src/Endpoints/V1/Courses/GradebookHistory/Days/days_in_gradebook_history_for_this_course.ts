import { client } from '../../../../../Client.js';
import { Day } from '../../../../../Resources/GradebookHistory.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Days in gradebook history for this course
 *
 * Returns a map of dates to grader/assignment groups
 *
 * Nickname: days_in_gradebook_history_for_this_course
 */
export async function days_in_gradebook_history_for_this_course({
  parameters
}: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/gradebook_history/days`,
    { method: 'GET', params: parameters }
  );
}
