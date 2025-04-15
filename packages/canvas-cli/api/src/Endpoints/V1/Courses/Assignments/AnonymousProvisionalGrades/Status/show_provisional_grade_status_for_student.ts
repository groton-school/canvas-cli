import { client } from '../../../../../../Client.js';

export type show_provisional_grade_status_for_studentPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
};

export type show_provisional_grade_status_for_studentSearchParameters = {
  /** The id of the student to show the status for */
  anonymous_id: string;
};

type Options = {
  pathParams: show_provisional_grade_status_for_studentPathParameters;
} & (
  | {
      searchParams?: Partial<show_provisional_grade_status_for_studentSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_provisional_grade_status_for_studentSearchParameters;
      strict: true;
    }
);

/**
 * Show provisional grade status for a student
 *
 * Determine whether or not the student's submission needs one or more
 * provisional grades.
 *
 * Nickname: show_provisional_grade_status_for_student
 */
export async function show_provisional_grade_status_for_student(
  options: Options
) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/anonymous_provisional_grades/status`,
    {
      method: 'GET',
      ...options
    }
  );
}
