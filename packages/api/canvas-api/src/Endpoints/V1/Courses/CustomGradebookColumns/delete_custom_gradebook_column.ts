import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { CustomColumn } from '../../../../Resources/CustomGradebookColumns.js';

export type delete_custom_gradebook_columnPathParameters = {
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

export type delete_custom_gradebook_columnSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_custom_gradebook_columnPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_custom_gradebook_columnPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_custom_gradebook_columnSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_custom_gradebook_columnSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_custom_gradebook_columnSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_custom_gradebook_columnSearchParameters;
          }
      ) & {
        strict: true;
      })
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
