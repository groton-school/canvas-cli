import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';
import { PageRevision } from '../../../../../../Resources/Pages.js';

export type show_revision_groups_latestPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  url_or_id: string | number;
};

export type show_revision_groups_latestSearchParameters = Masquerade &
  Partial<{
    /**
     * If set, exclude page content from results
     *
     * Type: boolean
     */
    summary: boolean | string;
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
  const response = await client().fetchAs<PageRevision>(
    `/api/v1/groups/{group_id}/pages/{url_or_id}/revisions/latest`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
