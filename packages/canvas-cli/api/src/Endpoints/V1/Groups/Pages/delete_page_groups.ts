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
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete page
 *
 * Delete a wiki page
 *
 * Nickname: delete_page_groups
 */
export async function delete_page_groups(options: Options) {
  return await client().fetchAs<Page>(
    `/api/v1/groups/{group_id}/pages/{url_or_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
