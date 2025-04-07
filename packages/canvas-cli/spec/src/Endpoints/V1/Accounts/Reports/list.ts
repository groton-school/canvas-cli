type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List Available Reports
 *
 * Returns a paginated list of reports for the current context.
 *
 * Nickname: list_available_reports
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/accounts/{account_id}/reports`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
