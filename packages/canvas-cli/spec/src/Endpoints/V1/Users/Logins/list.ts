type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List user logins
 *
 * Given a user ID, return a paginated list of that user's logins for the given
 * account.
 *
 * Nickname: list_user_logins_users
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/{user_id}/logins`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
