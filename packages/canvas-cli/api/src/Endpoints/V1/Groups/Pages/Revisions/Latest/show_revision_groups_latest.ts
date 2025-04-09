import { client } from '../../../../../../Client.js';
import { PageRevision } from '../../../../../../Resources/Pages.js';

type show_revision_groups_latestPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  url_or_id: string;
};

type show_revision_groups_latestSearchParameters = {
  /** If set, exclude page content from results */
  summary: boolean;
};

type Options = {
  pathParams: show_revision_groups_latestPathParameters;
  searchParams?: show_revision_groups_latestSearchParameters;
};

/**
 * Show revision
 *
 * Retrieve the metadata and optionally content of a revision of the page. Note
 * that retrieving historic versions of pages requires edit rights.
 *
 * Nickname: show_revision_groups_latest
 */
export async function show_revision_groups_latest({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<PageRevision>(
    `/v1/groups/{group_id}/pages/{url_or_id}/revisions/latest`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
