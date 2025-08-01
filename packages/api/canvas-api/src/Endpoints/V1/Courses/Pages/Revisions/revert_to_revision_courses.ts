import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { PageRevision } from '../../../../../Resources/Pages.js';

export type revert_to_revision_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  url_or_id: string | number;
  /**
   * The revision to revert to (use the {api:WikiPagesApiController#revisions
   * List Revisions API} to see available revisions)
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  revision_id: number | string;
};

export type revert_to_revision_coursesSearchParameters = Masquerade;

type Options = {
  pathParams: revert_to_revision_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<revert_to_revision_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: revert_to_revision_coursesSearchParameters;
      strict: true;
    }
);

/**
 * Revert to revision
 *
 * Revert a page to a prior revision.
 *
 * Nickname: revert_to_revision_courses
 */
export async function revert_to_revision_courses(options: Options) {
  const response = await client().fetchAs<PageRevision>(
    `/api/v1/courses/{course_id}/pages/{url_or_id}/revisions/{revision_id}`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
