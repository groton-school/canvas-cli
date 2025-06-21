import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

export type show_page_groupsPathParameters = {
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

export type show_page_groupsSearchParameters = Masquerade;

type Options = {
  pathParams: show_page_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<show_page_groupsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_page_groupsSearchParameters;
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
  const response = await client().fetchAs<Page>(
    `/api/v1/groups/{group_id}/pages/{url_or_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
