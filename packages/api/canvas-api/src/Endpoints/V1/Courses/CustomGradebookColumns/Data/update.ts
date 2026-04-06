import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ColumnDatum } from '../../../../../Resources/CustomGradebookColumns.js';

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
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** Column content. Setting this to blank will delete the datum object. */
  'column_data[content]': string;
};

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
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
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
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
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
