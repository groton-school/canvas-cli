import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

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
    /** Sort results by this field. */
    sort: string;
    /** The sorting order. Defaults to 'asc'. */
    order: string;
    /** The partial title of the pages to match and return. */
    search_term: string;
    /**
     * If true, include only published paqes. If false, exclude published pages.
     * If not present, do not filter on published status.
     *
     * Type: boolean
     */
    published: boolean | string;
    /**
     * - "enrollments": Optionally include the page body with each Page. If this
     *   is a block_editor page, returns the block_editor_attributes.
     */
    include: string[];
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
 * List pages
 *
 * A paginated list of the wiki pages associated with a course or group
 *
 * Nickname: list_pages_courses
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Page[]>(
    `/api/v1/courses/{course_id}/pages`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
