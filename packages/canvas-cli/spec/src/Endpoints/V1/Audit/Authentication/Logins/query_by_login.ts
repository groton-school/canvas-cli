type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Query by login.
 *
 * List authentication events for a given login.
 *
 * Nickname: query_by_login
 */
export async function query_by_login({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/audit/authentication/logins/{login_id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
