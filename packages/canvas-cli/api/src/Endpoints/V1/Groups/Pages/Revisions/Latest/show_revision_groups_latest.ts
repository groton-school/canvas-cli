import { client } from '../../../../../../Client.js';
import { PageRevision } from '../../../../../../Resources/Pages.js';

export type show_revision_groups_latestPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  url_or_id: string;
};

export type show_revision_groups_latestSearchParameters = Partial<{
  /** If set, exclude page content from results */
  summary: boolean;
}>;

type Options = {
  pathParams: show_revision_groups_latestPathParameters;
} & (
  | {
      searchParams?: Partial<show_revision_groups_latestSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_revision_groups_latestSearchParameters;
      strict: true;
    }
);

/**
 * Show revision
 *
 * Retrieve the metadata and optionally content of a revision of the page. Note
 * that retrieving historic versions of pages requires edit rights.
 *
 * Nickname: show_revision_groups_latest
 */
export async function show_revision_groups_latest(options: Options) {
  return await client().fetchAs<PageRevision>(
    `/api/v1/groups/{group_id}/pages/{url_or_id}/revisions/latest`,
    {
      method: 'GET',
      ...options
    }
  );
}
