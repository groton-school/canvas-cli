import { client } from '../../../../Client.js';
import { Scope } from '../../../../Resources/ApiTokenScopes.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

export type listSearchParameters = {
  /** The attribute to group the scopes by. By default no grouping is done. */
  group_by: string;
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List scopes
 *
 * A list of scopes that can be applied to developer keys and access tokens.
 *
 * Nickname: list_scopes
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/accounts/{account_id}/scopes`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
