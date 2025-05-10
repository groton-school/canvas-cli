import { client } from '../../../../../Client.js';
import { PageRevision } from '../../../../../Resources/Pages.js';

export type show_revision_groups_revision_idPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  url_or_id: string;
  /** ID */
  revision_id: string;
};

export type show_revision_groups_revision_idSearchParameters = Partial<{
  /** If set, exclude page content from results */
  summary: boolean;
}>;

type Options = {
  pathParams: show_revision_groups_revision_idPathParameters;
} & (
  | {
      searchParams?: Partial<show_revision_groups_revision_idSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_revision_groups_revision_idSearchParameters;
      strict: true;
    }
);

/**
 * Show revision
 *
 * Retrieve the metadata and optionally content of a revision of the page. Note
 * that retrieving historic versions of pages requires edit rights.
 *
 * Nickname: show_revision_groups_revision_id
 */
export async function show_revision_groups_revision_id(options: Options) {
  return await client().fetchAs<PageRevision>(
    `/api/v1/groups/{group_id}/pages/{url_or_id}/revisions/{revision_id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
