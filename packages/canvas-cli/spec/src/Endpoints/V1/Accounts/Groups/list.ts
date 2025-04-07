import { Group } from '../../../../Resources/Groups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List the groups available in a context.
 *
 * Returns the paginated list of active groups in the given context that are
 * visible to user.
 *
 * Nickname: list_groups_available_in_context_accounts
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/groups`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
