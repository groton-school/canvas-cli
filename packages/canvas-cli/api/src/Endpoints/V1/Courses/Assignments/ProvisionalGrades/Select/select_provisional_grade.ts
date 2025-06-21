import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';

export type select_provisional_gradePathParameters = {
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
  /**
   * ID
   *
   * Type: string
   */
  provisional_grade_id: string | number;
};

export type select_provisional_gradeSearchParameters = Masquerade;

type Options = {
  pathParams: select_provisional_gradePathParameters;
} & (
  | {
      searchParams?: Partial<select_provisional_gradeSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: select_provisional_gradeSearchParameters;
      strict: true;
    }
);

/**
 * Select provisional grade
 *
 * Choose which provisional grade the student should receive for a submission.
 * The caller must be the final grader for the assignment or an admin with
 * :select_final_grade rights.
 *
 * Nickname: select_provisional_grade
 */
export async function select_provisional_grade(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/provisional_grades/{provisional_grade_id}/select`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
