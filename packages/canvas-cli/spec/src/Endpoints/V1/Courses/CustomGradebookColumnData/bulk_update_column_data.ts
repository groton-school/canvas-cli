import { Progress } from '../../../../Resources/CoursePace.js';

type Parameters = {
  /**
   * Column content. Setting this to an empty string will delete the data
   * object.
   */
  column_data: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Bulk update column data
 *
 * Set the content of custom columns
 *
 * { "column_data": [ { "column_id": example_column_id, "user_id":
 * example_student_id, "content": example_content }, { "column_id":
 * example_column_id, "user_id": example_student_id, "content: example_content }
 * ] }
 *
 * Nickname: bulk_update_column_data
 */
export async function bulk_update_column_data({
  parameters
}: Options): Promise<Progress> {
  return await (
    await fetch(`/v1/courses/{course_id}/custom_gradebook_column_data`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
