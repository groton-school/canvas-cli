import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

export type show_front_page_groupsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type show_front_page_groupsSearchParameters = Masquerade;

type Options = {
  pathParams: show_front_page_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<show_front_page_groupsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_front_page_groupsSearchParameters;
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
  const response = await client().fetchAs<Page>(
    `/api/v1/groups/{group_id}/front_page`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
