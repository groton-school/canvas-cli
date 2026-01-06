import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';

export type bulk_select_provisional_gradesPathParameters = {
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

export type bulk_select_provisional_gradesSearchParameters = Masquerade;

type Options = {
  pathParams: bulk_select_provisional_gradesPathParameters;
} & (
  | {
      searchParams?: Partial<bulk_select_provisional_gradesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: bulk_select_provisional_gradesSearchParameters;
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/provisional_grades/bulk_select`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
