import { Role } from '../../../../Resources/Roles.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List roles
 *
 * A paginated list of the roles available to an account.
 *
 * Nickname: list_roles
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/roles`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
