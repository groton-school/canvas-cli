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
export async function delete_custom_gradebook_column({
  parameters
}: Options): Promise<CustomColumn> {
  return await (
    await fetch(`/v1/courses/{course_id}/custom_gradebook_columns/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
