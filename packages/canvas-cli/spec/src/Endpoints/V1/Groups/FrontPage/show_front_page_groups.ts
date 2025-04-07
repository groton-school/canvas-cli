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
export async function show_front_page_groups({
  parameters
}: Options): Promise<Page> {
  return await (
    await fetch(`/v1/groups/{group_id}/front_page`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
