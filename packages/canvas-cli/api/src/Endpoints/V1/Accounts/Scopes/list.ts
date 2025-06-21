import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Scope } from '../../../../Resources/ApiTokenScopes.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /** The attribute to group the scopes by. By default no grouping is done. */
    group_by: string;
  }>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List scopes
 *
 * A list of scopes that can be applied to developer keys and access tokens.
 *
 * Nickname: list_scopes
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Scope[]>(
    `/api/v1/accounts/{account_id}/scopes`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
