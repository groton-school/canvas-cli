import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Integer } from '../../../../Overrides.js';
import { Admin } from '../../../../Resources/Admins.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

export type listSearchParameters = Partial<{
  /**
   * Scope the results to those with user IDs equal to any of the IDs
   * specified here.
   */
  user_id: Integer[];
}> &
  Paginated;

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
export async function list(options: Options) {
  const response = await client().fetchAs<Admin[]>(
    `/api/v1/accounts/{account_id}/admins`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
