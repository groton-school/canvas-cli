type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Search account domains
 *
 * Returns a list of up to 5 matching account domains
 *
 * Partial match on name / domain are supported
 *
 * Nickname: search_account_domains
 */
export async function search_account_domains({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/accounts/search`, { method: 'GET', body: parameters })
  ).json();
}
