import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show front page
 *
 * Retrieve the content of the front page
 *
 * Nickname: show_front_page_groups
 */
export async function show_front_page_groups({ parameters }: Options) {
  return await client().fetchAs<Page>(`/v1/groups/{group_id}/front_page`, {
    method: 'GET',
    params: parameters
  });
}
