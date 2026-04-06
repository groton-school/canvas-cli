import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * The id of the submission the file is associated with. Provide this
     * argument to gain access to a file that has been submitted to an
     * assignment (Canvas will verify that the file belongs to the submission
     * and the calling user has rights to view the submission).
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    submission_id: number | string;
  }>;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get public inline preview url
 *
 * Determine the URL that should be used for inline preview of the file.
 *
 * Nickname: get_public_inline_preview_url
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/files/{id}/public_url`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
