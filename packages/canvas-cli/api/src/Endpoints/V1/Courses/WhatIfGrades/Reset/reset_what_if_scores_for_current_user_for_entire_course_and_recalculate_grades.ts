import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { gradesGrades } from '../../../../../Overrides.js';

export type reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_gradesPathParameters =
  {
    /**
     * ID
     *
     * Type: string
     */
    course_id: string | number;
  };

export type reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_gradesSearchParameters =
  Masquerade & Paginated;

type Options = {
  pathParams: reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_gradesPathParameters;
} & (
  | {
      searchParams?: Partial<reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_gradesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_gradesSearchParameters;
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
export async function reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_grades(
  options: Options
) {
  const response = await client().fetchAs<gradesGrades[]>(
    `/api/v1/courses/{course_id}/what_if_grades/reset`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
