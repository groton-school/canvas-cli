type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Update dashboard positions
 *
 * Updates the dashboard positions for a user for a given context. This allows
 * positions for the dashboard cards and elsewhere to be customized on a per
 * user basis.
 *
 * The asset string parameter should be in the format 'context_id', for example
 * 'course_42'
 *
 * Nickname: update_dashboard_positions
 */
export async function update({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/{id}/dashboard_positions`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
