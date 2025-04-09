import { client } from '../../../../Client.js';
import { CustomColumn } from '../../../../Resources/CustomGradebookColumns.js';

type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: updatePathParameters;
};

/**
 * Update a custom gradebook column
 *
 * Accepts the same parameters as custom gradebook column creation
 *
 * Nickname: update_custom_gradebook_column
 */
export async function update({ pathParams }: Options) {
  return await client().fetchAs<CustomColumn>(
    `/v1/courses/{course_id}/custom_gradebook_columns/{id}`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
