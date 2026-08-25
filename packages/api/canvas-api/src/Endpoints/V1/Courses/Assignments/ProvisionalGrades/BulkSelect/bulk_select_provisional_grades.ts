import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type bulk_select_provisional_gradesPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  assignment_id: string | number;
};

export type bulk_select_provisional_gradesSearchParameters = Masquerade;

type Options = (
  | {
      path: bulk_select_provisional_gradesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: bulk_select_provisional_gradesPathParameters;
    }
) &
  (
    | {
        query?: Partial<bulk_select_provisional_gradesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<bulk_select_provisional_gradesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: bulk_select_provisional_gradesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: bulk_select_provisional_gradesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Bulk select provisional grades
 *
 * Choose which provisional grades will be received by associated students for an assignment.
The caller must be the final grader for the assignment or an admin with :select_final_grade rights.
 *
 * nickname: bulk_select_provisional_grades
 *
 * 
 *
 * 
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
