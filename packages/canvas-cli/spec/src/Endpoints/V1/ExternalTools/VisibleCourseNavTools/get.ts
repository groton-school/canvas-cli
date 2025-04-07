type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get visible course navigation tools
 *
 * Get a list of external tools with the course_navigation placement that have
 * not been hidden in course settings and whose visibility settings apply to the
 * requesting user. These tools are the same that appear in the course
 * navigation.
 *
 * The response format is the same as for List external tools, but with
 * additional context_id and context_name fields on each element in the array.
 *
 * Nickname: get_visible_course_navigation_tools
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/external_tools/visible_course_nav_tools`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
