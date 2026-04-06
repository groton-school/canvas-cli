import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type reorder_custom_columnsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type reorder_custom_columnsSearchParameters = Masquerade;

export type reorder_custom_columnsFormParameters = Masquerade & {
  /**
   * No description
   *
   * Format: 'int64'
   */
  order: number | string[];
};

type Options = (
  | {
      path: reorder_custom_columnsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: reorder_custom_columnsPathParameters;
    }
) &
  (
    | {
        query?: Partial<reorder_custom_columnsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<reorder_custom_columnsSearchParameters>;
        body?: Partial<reorder_custom_columnsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<reorder_custom_columnsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: reorder_custom_columnsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: reorder_custom_columnsSearchParameters;
          }
      ) &
        (
          | {
              body: reorder_custom_columnsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: reorder_custom_columnsFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Reorder custom columns
 *
 * Puts the given columns in the specified order
 *
 * <b>200 OK</b> is returned if successful
 *
 * Nickname: reorder_custom_columns
 */
export async function reorder_custom_columns(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/custom_gradebook_columns/reorder`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
