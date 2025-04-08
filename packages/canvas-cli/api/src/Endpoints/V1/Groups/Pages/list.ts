import { client } from '../../../../Client.js';
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
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/groups/{group_id}/pages`, {
    method: 'GET',
    params: parameters
  });
}
