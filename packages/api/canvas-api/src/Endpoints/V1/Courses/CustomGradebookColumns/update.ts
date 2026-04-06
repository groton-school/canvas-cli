import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { CustomColumn } from '../../../../Resources/CustomGradebookColumns.js';

export type updatePathParameters = {
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

export type updateSearchParameters = Masquerade;

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: updateSearchParameters;
          }
      ) & {
        strict: true;
      })
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
