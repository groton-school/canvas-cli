import { RubricImport } from '';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Creates a rubric using a CSV file
 *
 * Returns the rubric import object that was created
 *
 * Nickname: creates_rubric_using_csv_file_courses
 */
export async function creates_rubric_using_csv_file_courses({
  parameters
}: Options): Promise<RubricImport> {
  return await (
    await fetch(`/v1/courses/{course_id}/rubrics/upload`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
