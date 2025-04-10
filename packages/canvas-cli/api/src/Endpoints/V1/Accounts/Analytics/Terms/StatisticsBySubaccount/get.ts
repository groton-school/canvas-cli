import { client } from '../../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  term_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get department-level statistics, broken down by subaccount
 *
 * Returns numeric statistics about the department subaccounts and term (or
 * filter).
 *
 * Shares the same variations on endpoint as the participation data.
 *
 * Nickname: get_department_level_statistics_broken_down_by_subaccount_terms
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/analytics/terms/{term_id}/statistics_by_subaccount`,
    {
      method: 'GET',
      pathParams
    }
  );
}
