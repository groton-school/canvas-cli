import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { PageRevision } from '../../../../../Resources/Pages.js';

export type show_revision_courses_revision_idPathParameters = {
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
  /**
   * ID
   *
   * Type: string
   */
  revision_id: string | number;
};

export type show_revision_courses_revision_idSearchParameters = Masquerade &
  Partial<{
    /**
     * If set, exclude page content from results
     *
     * Type: boolean
     */
    summary: boolean | string;
  }>;

type Options = (
  | {
      path: show_revision_courses_revision_idPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_revision_courses_revision_idPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_revision_courses_revision_idSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_revision_courses_revision_idSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<show_revision_courses_revision_idSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: show_revision_courses_revision_idSearchParameters;
        strict: true;
      }
  );

/**
 * Show revision
 *
 * Retrieve the metadata and optionally content of a revision of the page. Note
 * that retrieving historic versions of pages requires edit rights.
 *
 * Nickname: show_revision_courses_revision_id
 */
export async function show_revision_courses_revision_id(options: Options) {
  const response = await client().fetchAs<PageRevision>(
    `/api/v1/courses/{course_id}/pages/{url_or_id}/revisions/{revision_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
