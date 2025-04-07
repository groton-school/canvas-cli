type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete an external tool
 *
 * Remove the specified external tool
 *
 * Nickname: delete_external_tool_courses
 */
export async function delete_external_tool_courses({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/external_tools/{external_tool_id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
