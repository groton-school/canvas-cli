import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { ColumnDatum } from '../../../../../Resources/CustomGradebookColumns.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * If true, hidden columns will be included in the result. If false or
     * absent, only visible columns will be returned.
     *
     * Type: boolean
     */
    include_hidden: boolean | string;
  }>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List entries for a column
 *
 * This does not list entries for students without associated data.
 *
 * Nickname: list_entries_for_column
 */
export async function list(options: Options) {
  const response = await client().fetchAs<ColumnDatum[]>(
    `/api/v1/courses/{course_id}/custom_gradebook_columns/{id}/data`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
