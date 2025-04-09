import { client } from '../../../../../../Client.js';

export type select_provisional_gradePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  provisional_grade_id: string;
};

type Options = {
  pathParams: select_provisional_gradePathParameters;
};

/**
 * Select provisional grade
 *
 * Choose which provisional grade the student should receive for a submission.
 * The caller must be the final grader for the assignment or an admin with
 * :select_final_grade rights.
 *
 * Nickname: select_provisional_grade
 */
export async function select_provisional_grade({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/provisional_grades/{provisional_grade_id}/select`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
