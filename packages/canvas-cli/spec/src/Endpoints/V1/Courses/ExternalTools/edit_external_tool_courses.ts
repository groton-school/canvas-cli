type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Edit an external tool
 *
 * Update the specified external tool. Uses same parameters as create
 *
 * Nickname: edit_external_tool_courses
 */
export async function edit_external_tool_courses({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/external_tools/{external_tool_id}`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
