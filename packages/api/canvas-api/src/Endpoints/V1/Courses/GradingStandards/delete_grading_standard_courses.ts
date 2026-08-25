import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { GradingStandard } from '../../../../Resources/GradingStandards.js';

export type delete_grading_standard_coursesPathParameters = {
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
  grading_standard_id: string | number;
};

export type delete_grading_standard_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_grading_standard_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_grading_standard_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_grading_standard_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_grading_standard_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_grading_standard_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_grading_standard_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a grading standard
 *
 * Deletes the grading standard with the given id
 *
 * nickname: delete_grading_standard_courses
 *
 *
 *
 *
 */
export async function delete_grading_standard_courses(options: Options) {
  const response = await client().fetchAs<GradingStandard>(
    `/api/v1/courses/{course_id}/grading_standards/{grading_standard_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
