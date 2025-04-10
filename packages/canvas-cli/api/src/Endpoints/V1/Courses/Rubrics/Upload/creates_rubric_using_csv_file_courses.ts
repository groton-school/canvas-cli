import { client } from '../../../../../Client.js';
import { RubricImport } from '../../../../../Overrides.js';

export type creates_rubric_using_csv_file_coursesPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: creates_rubric_using_csv_file_coursesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function creates_rubric_using_csv_file_courses({
  pathParams
}: Options) {
  return await client().fetchAs<RubricImport>(
    `/v1/courses/{course_id}/rubrics/upload`,
    {
      method: 'POST',
      pathParams
    }
  );
}
