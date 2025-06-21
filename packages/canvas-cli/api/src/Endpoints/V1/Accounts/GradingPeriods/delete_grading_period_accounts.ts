import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type delete_grading_period_accountsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_grading_period_accountsSearchParameters = Masquerade;

type Options = {
  pathParams: delete_grading_period_accountsPathParameters;
} & (
  | {
      searchParams?: Partial<delete_grading_period_accountsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_grading_period_accountsSearchParameters;
      strict: true;
    }
);

/**
 * Delete a grading period
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_grading_period_accounts
 */
export async function delete_grading_period_accounts(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/grading_periods/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
