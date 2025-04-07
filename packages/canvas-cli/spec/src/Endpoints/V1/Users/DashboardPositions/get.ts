type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get dashboard positions
 *
 * Returns all dashboard positions that have been saved for a user.
 *
 * Nickname: get_dashboard_positions
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/{id}/dashboard_positions`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
