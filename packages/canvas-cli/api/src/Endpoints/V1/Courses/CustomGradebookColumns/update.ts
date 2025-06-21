import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { CustomColumn } from '../../../../Resources/CustomGradebookColumns.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type updateSearchParameters = Masquerade;

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      strict: true;
    }
);

/**
 * Update a custom gradebook column
 *
 * Accepts the same parameters as custom gradebook column creation
 *
 * Nickname: update_custom_gradebook_column
 */
export async function update(options: Options) {
  const response = await client().fetchAs<CustomColumn>(
    `/api/v1/courses/{course_id}/custom_gradebook_columns/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
