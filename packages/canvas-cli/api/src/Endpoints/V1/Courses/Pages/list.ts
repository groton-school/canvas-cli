import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = {
  /** Sort results by this field. */
  sort: string;
  /** The sorting order. Defaults to 'asc'. */
  order: string;
  /** The partial title of the pages to match and return. */
  search_term: string;
  /**
   * If true, include only published paqes. If false, exclude published pages.
   * If not present, do not filter on published status.
   */
  published: boolean;
  /**
   * - "enrollments": Optionally include the page body with each Page. If this
   *   is a block_editor page, returns the block_editor_attributes.
   */
  include: string[];
} & Paginated;

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
  return await client().fetchAs<Page[]>(`/api/v1/courses/{course_id}/pages`, {
    method: 'GET',
    ...options
  });
}
