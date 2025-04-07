import { Account } from '../../../Resources/Accounts.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get accounts that admins can manage
 *
 * A paginated list of accounts where the current user has permission to create
 * or manage courses. List will be empty for students and teachers as only
 * admins can view which accounts they are in.
 *
 * Nickname: get_accounts_that_admins_can_manage
 */
export async function get({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/manageable_accounts`, { method: 'GET', body: parameters })
  ).json();
}
