import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { ColumnDatum } from '../../../../../Resources/CustomGradebookColumns.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * If true, hidden columns will be included in the result. If false or
     * absent, only visible columns will be returned.
     */
    include_hidden: boolean;
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
