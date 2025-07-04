import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { File } from '../../../../Resources/Files.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Filter results by content-type. You can specify type/subtype pairs (e.g.,
     * 'image/jpeg'), or simply types (e.g., 'image', which will match
     * 'image/gif', 'image/jpeg', etc.).
     */
    content_types: string[];
    /**
     * Exclude given content-types from your results. You can specify
     * type/subtype pairs (e.g., 'image/jpeg'), or simply types (e.g., 'image',
     * which will match 'image/gif', 'image/jpeg', etc.).
     */
    exclude_content_types: string[];
    /** The partial name of the files to match and return. */
    search_term: string;
    /**
     * Array of additional information to include.
     *
     * "user":: the user who uploaded the file or last edited its content
     * "usage_rights":: copyright and license information for the file (see
     * UsageRights)
     */
    include: string[];
    /**
     * Array of information to restrict to. Overrides include[]
     *
     * "names":: only returns file name information
     */
    only: string[];
    /**
     * Sort results by this field. Defaults to 'name'. Note that `sort=user`
     * implies `include[]=user`.
     */
    sort: string;
    /** The sorting order. Defaults to 'asc'. */
    order: string;
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
 * List files
 *
 * Returns the paginated list of files for the folder or course.
 *
 * Nickname: list_files_users
 */
export async function list(options: Options) {
  const response = await client().fetchAs<File[]>(
    `/api/v1/users/{user_id}/files`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
