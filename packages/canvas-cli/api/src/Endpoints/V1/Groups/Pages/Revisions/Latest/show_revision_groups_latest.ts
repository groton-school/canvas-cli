import { client } from '../../../../../../Client.js';
import { PageRevision } from '../../../../../../Resources/Pages.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show revision
 *
 * Retrieve the metadata and optionally content of a revision of the page. Note
 * that retrieving historic versions of pages requires edit rights.
 *
 * Nickname: show_revision_groups_latest
 */
export async function show_revision_groups_latest({ parameters }: Options) {
  return await client().fetchAs<PageRevision>(
    `/v1/groups/{group_id}/pages/{url_or_id}/revisions/latest`,
    { method: 'GET', params: parameters }
  );
}
