import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { PageRevision } from '../../../../../Resources/Pages.js';

export type revert_to_revision_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  url_or_id: string;
  /**
   * The revision to revert to (use the {api:WikiPagesApiController#revisions
   * List Revisions API} to see available revisions)
   *
   * Format: 'int64'
   */
  revision_id: number;
};

export type revert_to_revision_groupsSearchParameters = Masquerade;

type Options = {
  pathParams: revert_to_revision_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<revert_to_revision_groupsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: revert_to_revision_groupsSearchParameters;
      strict: true;
    }
);

/**
 * Revert to revision
 *
 * Revert a page to a prior revision.
 *
 * Nickname: revert_to_revision_groups
 */
export async function revert_to_revision_groups(options: Options) {
  const response = await client().fetchAs<PageRevision>(
    `/api/v1/groups/{group_id}/pages/{url_or_id}/revisions/{revision_id}`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
