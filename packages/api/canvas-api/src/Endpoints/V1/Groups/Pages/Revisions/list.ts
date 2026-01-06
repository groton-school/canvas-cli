import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { PageRevision } from '../../../../../Resources/Pages.js';

export type listPathParameters = {
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

export type listSearchParameters = Masquerade & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
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
export async function list(options: Options) {
  const response = await client().fetchAs<PageRevision[]>(
    `/api/v1/groups/{group_id}/pages/{url_or_id}/revisions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
