type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a sessionless launch url for an external tool.
 *
 * Returns a sessionless launch url for an external tool. Prefers the
 * resource_link_lookup_uuid, but defaults to the other passed parameters id,
 * url, and launch_type
 *
 * NOTE: Either the resource_link_lookup_uuid, id, or url must be provided
 * unless launch_type is assessment or module_item.
 *
 * Nickname: get_sessionless_launch_url_for_external_tool_courses
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/external_tools/sessionless_launch`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
