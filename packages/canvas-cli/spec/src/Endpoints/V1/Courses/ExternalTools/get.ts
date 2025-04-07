type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single external tool
 *
 * Returns the specified external tool.
 *
 * Nickname: get_single_external_tool_courses
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/external_tools/{external_tool_id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
