import { Page } from '../../../../Resources/Pages.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete page
 *
 * Delete a wiki page
 *
 * Nickname: delete_page_groups
 */
export async function delete_page_groups({
  parameters
}: Options): Promise<Page> {
  return await (
    await fetch(`/v1/groups/{group_id}/pages/{url_or_id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
