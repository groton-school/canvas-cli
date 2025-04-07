type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List rubrics
 *
 * Returns the paginated list of active rubrics for the current context.
 *
 * Nickname: list_rubrics_accounts
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/accounts/{account_id}/rubrics`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
