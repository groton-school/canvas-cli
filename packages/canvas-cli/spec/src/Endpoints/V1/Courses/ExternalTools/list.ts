type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List external tools
 *
 * Returns the paginated list of external tools for the current context. See the
 * get request docs for a single tool for a list of properties on an external
 * tool.
 *
 * Nickname: list_external_tools_courses
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/external_tools`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
