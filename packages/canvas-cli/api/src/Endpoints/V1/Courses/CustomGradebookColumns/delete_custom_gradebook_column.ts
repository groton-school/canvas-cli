import { client } from '../../../../Client.js';
import { CustomColumn } from '../../../../Resources/CustomGradebookColumns.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a custom gradebook column
 *
 * Permanently deletes a custom column and its associated data
 *
 * Nickname: delete_custom_gradebook_column
 */
export async function delete_custom_gradebook_column({ parameters }: Options) {
  return await client().fetchAs<CustomColumn>(
    `/v1/courses/{course_id}/custom_gradebook_columns/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
