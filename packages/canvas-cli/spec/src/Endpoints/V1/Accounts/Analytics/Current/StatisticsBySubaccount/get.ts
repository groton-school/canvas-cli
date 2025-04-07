type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get department-level statistics, broken down by subaccount
 *
 * Returns numeric statistics about the department subaccounts and term (or
 * filter).
 *
 * Shares the same variations on endpoint as the participation data.
 *
 * Nickname: get_department_level_statistics_broken_down_by_subaccount_current
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/accounts/{account_id}/analytics/current/statistics_by_subaccount`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
