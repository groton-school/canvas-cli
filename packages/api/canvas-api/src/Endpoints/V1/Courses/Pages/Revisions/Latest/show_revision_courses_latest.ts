import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';
import { PageRevision } from '../../../../../../Resources/Pages.js';

export type show_revision_courses_latestPathParameters = {
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
  url_or_id: string | number;
};

export type show_revision_courses_latestSearchParameters = Masquerade &
  Partial<{
    /**
     * If set, exclude page content from results
     *
     * Type: boolean
     */
    summary: boolean | string;
  }>;

type Options = {
  pathParams: show_revision_courses_latestPathParameters;
} & (
  | {
      searchParams?: Partial<show_revision_courses_latestSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_revision_courses_latestSearchParameters;
      strict: true;
    }
);

/**
 * Show revision
 *
 * Retrieve the metadata and optionally content of a revision of the page. Note
 * that retrieving historic versions of pages requires edit rights.
 *
 * Nickname: show_revision_courses_latest
 */
export async function show_revision_courses_latest(options: Options) {
  const response = await client().fetchAs<PageRevision>(
    `/api/v1/courses/{course_id}/pages/{url_or_id}/revisions/latest`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
