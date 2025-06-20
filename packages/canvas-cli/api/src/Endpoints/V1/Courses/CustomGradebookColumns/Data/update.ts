import { client } from '../../../../../Client.js';
import { ColumnDatum } from '../../../../../Resources/CustomGradebookColumns.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
  /** ID */
  user_id: string;
};

export type updateFormParameters = {
  /** Column content. Setting this to blank will delete the datum object. */
  'column_data[content]': string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update column data
 *
 * Set the content of a custom column
 *
 * Nickname: update_column_data
 */
export async function update(options: Options) {
  const response = await client().fetchAs<ColumnDatum>(
    `/api/v1/courses/{course_id}/custom_gradebook_columns/{id}/data/{user_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
