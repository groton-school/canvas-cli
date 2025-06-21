import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
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
 * Nickname: get_department_level_statistics_broken_down_by_subaccount_completed
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/analytics/completed/statistics_by_subaccount`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
