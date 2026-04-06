import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { RubricImport } from '../../../../../Overrides.js';

export type creates_rubric_using_csv_file_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type creates_rubric_using_csv_file_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: creates_rubric_using_csv_file_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: creates_rubric_using_csv_file_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<creates_rubric_using_csv_file_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<creates_rubric_using_csv_file_coursesSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<creates_rubric_using_csv_file_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: creates_rubric_using_csv_file_coursesSearchParameters;
        strict: true;
      }
  );

/**
 * Creates a rubric using a CSV file
 *
 * Returns the rubric import object that was created
 *
 * Nickname: creates_rubric_using_csv_file_courses
 */
export async function creates_rubric_using_csv_file_courses(options: Options) {
  const response = await client().fetchAs<RubricImport>(
    `/api/v1/courses/{course_id}/rubrics/upload`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
