import { PageRevision } from '../../../../../Resources/Pages.js';

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
 * Nickname: show_revision_groups_revision_id
 */
export async function show_revision_groups_revision_id({
  parameters
}: Options): Promise<PageRevision> {
  return await (
    await fetch(
      `/v1/groups/{group_id}/pages/{url_or_id}/revisions/{revision_id}`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
