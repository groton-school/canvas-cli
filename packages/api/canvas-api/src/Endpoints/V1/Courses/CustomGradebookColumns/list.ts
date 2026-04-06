import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { CustomColumn } from '../../../../Resources/CustomGradebookColumns.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Include hidden parameters (defaults to false)
     *
     * Type: boolean
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
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: listSearchParameters;
        strict: true;
      }
  );

/**
 * List custom gradebook columns
 *
 * A paginated list of all custom gradebook columns for a course
 *
 * Nickname: list_custom_gradebook_columns
 */
export async function list(options: Options) {
  const response = await client().fetchAs<CustomColumn[]>(
    `/api/v1/courses/{course_id}/custom_gradebook_columns`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
