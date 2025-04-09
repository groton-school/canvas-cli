import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

type show_front_page_groupsPathParameters = {
  /** ID */
  group_id: string;
};

type Options = {
  pathParams: show_front_page_groupsPathParameters;
};

/**
 * Show front page
 *
 * Retrieve the content of the front page
 *
 * Nickname: show_front_page_groups
 */
export async function show_front_page_groups({ pathParams }: Options) {
  return await client().fetchAs<Page>(`/v1/groups/{group_id}/front_page`, {
    method: 'GET',
    pathParams
  });
}
