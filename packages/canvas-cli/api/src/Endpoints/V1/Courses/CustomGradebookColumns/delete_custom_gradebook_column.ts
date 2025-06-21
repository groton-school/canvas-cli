import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { CustomColumn } from '../../../../Resources/CustomGradebookColumns.js';

export type delete_custom_gradebook_columnPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type delete_custom_gradebook_columnSearchParameters = Masquerade;

type Options = {
  pathParams: delete_custom_gradebook_columnPathParameters;
} & (
  | {
      searchParams?: Partial<delete_custom_gradebook_columnSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_custom_gradebook_columnSearchParameters;
      strict: true;
    }
);

/**
 * Delete a custom gradebook column
 *
 * Permanently deletes a custom column and its associated data
 *
 * Nickname: delete_custom_gradebook_column
 */
export async function delete_custom_gradebook_column(options: Options) {
  const response = await client().fetchAs<CustomColumn>(
    `/api/v1/courses/{course_id}/custom_gradebook_columns/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
