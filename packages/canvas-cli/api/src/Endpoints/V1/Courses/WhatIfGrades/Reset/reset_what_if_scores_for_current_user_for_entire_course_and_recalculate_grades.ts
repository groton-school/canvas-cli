import { gradesGrades } from '';
import { client } from '../../../../../Client.js';

type reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_gradesPathParameters =
  {
    /** ID */
    course_id: string;
  };

type Options = {
  pathParams: reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_gradesPathParameters;
};

/**
 * Reset the what-if scores for the current user for an entire course and
 * recalculate grades
 *
 * Nickname:
 * reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_grades
 */
export async function reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_grades({
  pathParams
}: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/what_if_grades/reset`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
