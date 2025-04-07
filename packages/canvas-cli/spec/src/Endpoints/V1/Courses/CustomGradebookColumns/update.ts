import { CustomColumn } from '../../../../Resources/CustomGradebookColumns.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Update a custom gradebook column
 *
 * Accepts the same parameters as custom gradebook column creation
 *
 * Nickname: update_custom_gradebook_column
 */
export async function update({ parameters }: Options): Promise<CustomColumn> {
  return await (
    await fetch(`/v1/courses/{course_id}/custom_gradebook_columns/{id}`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
