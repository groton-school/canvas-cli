import { Group } from '../../../../Resources/Groups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List groups in group category
 *
 * Returns a paginated list of groups in a group category
 *
 * Nickname: list_groups_in_group_category
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/group_categories/{group_category_id}/groups`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
