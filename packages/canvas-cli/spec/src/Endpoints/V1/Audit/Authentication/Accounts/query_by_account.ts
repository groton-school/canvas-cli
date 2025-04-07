type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Query by account.
 *
 * List authentication events for a given account.
 *
 * Nickname: query_by_account
 */
export async function query_by_account({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/audit/authentication/accounts/{account_id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
