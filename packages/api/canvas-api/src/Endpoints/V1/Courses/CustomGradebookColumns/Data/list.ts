import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { ColumnDatum } from '../../../../../Resources/CustomGradebookColumns.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * If true, hidden columns will be included in the
result. If false or absent, only visible columns
will be returned.
     *
     * type: boolean
     *
     * 
     */
    include_hidden: boolean | string;
  }>;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List entries for a column
 *
 * This does not list entries for students without associated data.
 *
 * nickname: list_entries_for_column
 *
 *
 *
 *
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
