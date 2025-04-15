import { client } from '../../../../../../Client.js';

export type bulk_select_provisional_gradesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
};

type Options = {
  pathParams: bulk_select_provisional_gradesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Bulk select provisional grades
 *
 * Choose which provisional grades will be received by associated students for
 * an assignment. The caller must be the final grader for the assignment or an
 * admin with :select_final_grade rights.
 *
 * Nickname: bulk_select_provisional_grades
 */
export async function bulk_select_provisional_grades(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/provisional_grades/bulk_select`,
    {
      method: 'PUT',
      ...options
    }
  );
}
