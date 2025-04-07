type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get quota information
 *
 * Returns the total and used storage quota for the course, group, or user.
 *
 * Nickname: get_quota_information_users
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/{user_id}/files/quota`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
