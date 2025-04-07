import { Page } from '../../../../Resources/Pages.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List pages
 *
 * A paginated list of the wiki pages associated with a course or group
 *
 * Nickname: list_pages_groups
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/groups/{group_id}/pages`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
