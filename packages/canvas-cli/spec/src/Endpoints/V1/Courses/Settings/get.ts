type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get course settings
 *
 * Returns some of a course's settings.
 *
 * Nickname: get_course_settings
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/settings`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
