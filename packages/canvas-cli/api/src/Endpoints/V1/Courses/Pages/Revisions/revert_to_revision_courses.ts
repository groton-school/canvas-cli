import { client } from '../../../../../Client.js';
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
 * Nickname: revert_to_revision_courses
 */
export async function revert_to_revision_courses({ parameters }: Options) {
  return await client().fetchAs<PageRevision>(
    `/v1/courses/{course_id}/pages/{url_or_id}/revisions/{revision_id}`,
    { method: 'POST', params: parameters }
  );
}
