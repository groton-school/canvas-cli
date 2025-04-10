import { gradesGrades } from '';
import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';

export type reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_gradesPathParameters =
  {
    /** ID */
    course_id: string;
  };

export type reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_gradesSearchParameters =
  Paginated;

type Options = {
  pathParams: reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_gradesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

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
  return await client().fetchAs<gradesGrades[]>(
    `/v1/courses/{course_id}/what_if_grades/reset`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
