import { Page } from '../../../../Resources/Pages.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show page
 *
 * Retrieve the content of a wiki page
 *
 * Nickname: show_page_groups
 */
export async function show_page_groups({ parameters }: Options): Promise<Page> {
  return await (
    await fetch(`/v1/groups/{group_id}/pages/{url_or_id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
