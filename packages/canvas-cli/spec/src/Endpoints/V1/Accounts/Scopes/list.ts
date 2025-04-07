import { Scope } from '../../../../Resources/ApiTokenScopes.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List scopes
 *
 * A list of scopes that can be applied to developer keys and access tokens.
 *
 * Nickname: list_scopes
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/scopes`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
