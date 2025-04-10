import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { PageRevision } from '../../../../../Resources/Pages.js';

export type listPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  url_or_id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List revisions
 *
 * A paginated list of the revisions of a page. Callers must have update rights
 * on the page in order to see page history.
 *
 * Nickname: list_revisions_groups
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<PageRevision[]>(
    `/v1/groups/{group_id}/pages/{url_or_id}/revisions`,
    {
      method: 'GET',
      pathParams
    }
  );
}
