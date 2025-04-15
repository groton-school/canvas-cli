import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

export type show_page_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  url_or_id: string;
};

type Options = {
  pathParams: show_page_groupsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Show page
 *
 * Retrieve the content of a wiki page
 *
 * Nickname: show_page_groups
 */
export async function show_page_groups(options: Options) {
  return await client().fetchAs<Page>(
    `/api/v1/groups/{group_id}/pages/{url_or_id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
