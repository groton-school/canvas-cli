import { client } from '../../../../Client.js';
import { Progress } from '../../../../Resources/CoursePace.js';

export type bulk_update_column_dataPathParameters = {
  /** ID */
  course_id: string;
};

export type bulk_update_column_dataFormParameters = {
  /**
   * Column content. Setting this to an empty string will delete the data
   * object.
   */
  column_data: string[];
};

type Options = {
  pathParams: bulk_update_column_dataPathParameters;
  params?: bulk_update_column_dataFormParameters;
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
export async function bulk_update_column_data({ pathParams, params }: Options) {
  return await client().fetchAs<Progress>(
    `/v1/courses/{course_id}/custom_gradebook_column_data`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
