import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { DeveloperKey } from '../../../../Resources/DeveloperKeys.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

export type listSearchParameters = {
  /**
   * Defaults to false. If true, lists keys inherited from Site Admin (and
   * consortium parent account, if applicable).
   */
  inherited: boolean;
} & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: listSearchParameters;
      strict: true;
    }
);

/**
 * List Developer Keys
 *
 * List all developer keys created in the current account.
 *
 * Nickname: list_developer_keys
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<DeveloperKey[]>(
    `/v1/accounts/{account_id}/developer_keys`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
