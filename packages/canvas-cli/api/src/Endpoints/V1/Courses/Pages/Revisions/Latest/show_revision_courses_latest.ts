import { client } from '../../../../../../Client.js';
import { PageRevision } from '../../../../../../Resources/Pages.js';

export type show_revision_courses_latestPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  url_or_id: string;
};

export type show_revision_courses_latestSearchParameters = {
  /** If set, exclude page content from results */
  summary: boolean;
};

type Options = {
  pathParams: show_revision_courses_latestPathParameters;
} & (
  | {
      searchParams?: Partial<show_revision_courses_latestSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: show_revision_courses_latestSearchParameters;
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
export async function show_revision_courses_latest({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<PageRevision>(
    `/v1/courses/{course_id}/pages/{url_or_id}/revisions/latest`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
