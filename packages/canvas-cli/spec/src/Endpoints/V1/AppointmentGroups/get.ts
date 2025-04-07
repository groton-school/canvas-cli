type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single appointment group
 *
 * Returns information for a single appointment group
 *
 * Nickname: get_single_appointment_group
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/appointment_groups/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
