import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { RubricImport } from '../../../../../Overrides.js';

export type creates_rubric_using_csv_file_coursesPathParameters = {
  /** ID */
  course_id: string;
};

export type creates_rubric_using_csv_file_coursesSearchParameters = Masquerade;

type Options = {
  pathParams: creates_rubric_using_csv_file_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<creates_rubric_using_csv_file_coursesSearchParameters>;
      strict?: false;
    }
  | {
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
