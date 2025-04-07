type Parameters = {
  /** The purpose of the token. */
  'token[purpose]': string;
  /**
   * The time at which the token will expire.
   *
   * Format: 'date-time'
   */
  'token[expires_at]': string;
  /** The scopes to associate with the token. */
  'token[scopes]': string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Create an access token
 *
 * Create a new access token for the specified user. If the user is not the
 * current user, the token will be created as "pending", and must be activated
 * by the user before it can be used.
 *
 * Nickname: create_access_token
 */
export async function create({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/{user_id}/tokens`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
