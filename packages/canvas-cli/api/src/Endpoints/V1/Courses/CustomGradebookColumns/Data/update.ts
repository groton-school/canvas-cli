import { client } from '../../../../../Client.js';
import { ColumnDatum } from '../../../../../Resources/CustomGradebookColumns.js';

type Parameters = {
  /** Column content. Setting this to blank will delete the datum object. */
  'column_data[content]': string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update column data
 *
 * Set the content of a custom column
 *
 * Nickname: update_column_data
 */
export async function update({ parameters }: Options) {
  return await client().fetchAs<ColumnDatum>(
    `/v1/courses/{course_id}/custom_gradebook_columns/{id}/data/{user_id}`,
    { method: 'PUT', params: parameters }
  );
}
