import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

export type delete_page_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  url_or_id: string;
};

type Options = {
  pathParams: delete_page_groupsPathParameters;
};

/**
 * Delete page
 *
 * Delete a wiki page
 *
 * Nickname: delete_page_groups
 */
export async function delete_page_groups({ pathParams }: Options) {
  return await client().fetchAs<Page>(
    `/v1/groups/{group_id}/pages/{url_or_id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
