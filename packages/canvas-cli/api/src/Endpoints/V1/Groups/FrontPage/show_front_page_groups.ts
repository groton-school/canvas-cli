import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

export type show_front_page_groupsPathParameters = {
  /** ID */
  group_id: string;
};

type Options = {
  pathParams: show_front_page_groupsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Show front page
 *
 * Retrieve the content of the front page
 *
 * Nickname: show_front_page_groups
 */
export async function show_front_page_groups(options: Options) {
  return await client().fetchAs<Page>(`/api/v1/groups/{group_id}/front_page`, {
    method: 'GET',
    ...options
  });
}
