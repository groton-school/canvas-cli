import { Integer } from '';
import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { Admin } from '../../../../Resources/Admins.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

export type listSearchParameters = {
  /**
   * Scope the results to those with user IDs equal to any of the IDs
   * specified here.
   */
  user_id: Integer[];
} & Paginated;

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
 * List account admins
 *
 * A paginated list of the admins in the account
 *
 * Nickname: list_account_admins
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<Admin[]>(`/v1/accounts/{account_id}/admins`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
