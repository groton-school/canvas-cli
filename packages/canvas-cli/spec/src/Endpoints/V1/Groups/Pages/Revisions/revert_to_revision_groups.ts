import { PageRevision } from '../../../../../Resources/Pages.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Revert to revision
 *
 * Revert a page to a prior revision.
 *
 * Nickname: revert_to_revision_groups
 */
export async function revert_to_revision_groups({
  parameters
}: Options): Promise<PageRevision> {
  return await (
    await fetch(
      `/v1/groups/{group_id}/pages/{url_or_id}/revisions/{revision_id}`,
      { method: 'POST', body: parameters }
    )
  ).json();
}
