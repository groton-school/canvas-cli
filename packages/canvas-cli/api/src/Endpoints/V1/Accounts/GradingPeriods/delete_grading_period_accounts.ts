import { client } from '../../../../Client.js';

export type delete_grading_period_accountsPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_grading_period_accountsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
