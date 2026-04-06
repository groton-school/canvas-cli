import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type show_provisional_grade_status_for_studentPathParameters = {
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
  assignment_id: string | number;
};

export type show_provisional_grade_status_for_studentSearchParameters =
  Masquerade &
    Partial<{
      /**
       * The id of the student to show the status for
       *
       * Type: integer
       *
       * Format: 'int64'
       */
      student_id: number | string;
    }>;

type Options = (
  | {
      path: show_provisional_grade_status_for_studentPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_provisional_grade_status_for_studentPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_provisional_grade_status_for_studentSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_provisional_grade_status_for_studentSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<show_provisional_grade_status_for_studentSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: show_provisional_grade_status_for_studentSearchParameters;
        strict: true;
      }
  );

/**
 * Show provisional grade status for a student
 *
 * Tell whether the student's submission needs one or more provisional grades.
 *
 * Nickname: show_provisional_grade_status_for_student
 */
export async function show_provisional_grade_status_for_student(
  options: Options
) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/provisional_grades/status`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
