type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a late policy
 *
 * Returns the late policy for a course.
 *
 * Nickname: get_late_policy
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{id}/late_policy`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
