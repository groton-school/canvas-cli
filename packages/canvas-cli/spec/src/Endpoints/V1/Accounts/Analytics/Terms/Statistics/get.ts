type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get department-level statistics
 *
 * Returns numeric statistics about the department and term (or filter).
 *
 * Shares the same variations on endpoint as the participation data.
 *
 * Nickname: get_department_level_statistics_terms
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/accounts/{account_id}/analytics/terms/{term_id}/statistics`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
