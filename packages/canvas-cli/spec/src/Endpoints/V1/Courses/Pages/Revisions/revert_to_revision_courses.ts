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
export async function revert_to_revision_courses({
  parameters
}: Options): Promise<PageRevision> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/pages/{url_or_id}/revisions/{revision_id}`,
      { method: 'POST', body: parameters }
    )
  ).json();
}
