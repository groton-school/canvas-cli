import { ColumnDatum } from '../../../../../Resources/CustomGradebookColumns.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List entries for a column
 *
 * This does not list entries for students without associated data.
 *
 * Nickname: list_entries_for_column
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/custom_gradebook_columns/{id}/data`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
