import { client } from '../../../../Client.js';
import { Grader } from '../../../../Resources/GradebookHistory.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Details for a given date in gradebook history for this course
 *
 * Returns the graders who worked on this day, along with the assignments they
 * worked on. More details can be obtained by selecting a grader and assignment
 * and calling the 'submissions' api endpoint for a given date.
 *
 * Nickname: details_for_given_date_in_gradebook_history_for_this_course
 */
export async function details_for_given_date_in_gradebook_history_for_this_course({
  parameters
}: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/gradebook_history/{date}`,
    { method: 'GET', params: parameters }
  );
}
