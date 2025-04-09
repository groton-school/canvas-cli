import { client } from '../../../../../Client.js';
import { PageRevision } from '../../../../../Resources/Pages.js';

type show_revision_courses_revision_idPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  url_or_id: string;
  /** ID */
  revision_id: string;
};

type show_revision_courses_revision_idSearchParameters = {
  /** If set, exclude page content from results */
  summary: boolean;
};

type Options = {
  pathParams: show_revision_courses_revision_idPathParameters;
  searchParams?: show_revision_courses_revision_idSearchParameters;
};

/**
 * Show revision
 *
 * Retrieve the metadata and optionally content of a revision of the page. Note
 * that retrieving historic versions of pages requires edit rights.
 *
 * Nickname: show_revision_courses_revision_id
 */
export async function show_revision_courses_revision_id({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<PageRevision>(
    `/v1/courses/{course_id}/pages/{url_or_id}/revisions/{revision_id}`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
