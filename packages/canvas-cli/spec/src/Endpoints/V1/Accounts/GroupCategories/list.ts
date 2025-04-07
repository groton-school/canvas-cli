import { GroupCategory } from '../../../../Resources/GroupCategories.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List group categories for a context
 *
 * Returns a paginated list of group categories in a context. The list returned
 * depends on the permissions of the current user and the specified
 * collaboration state.
 *
 * Nickname: list_group_categories_for_context_accounts
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/group_categories`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
