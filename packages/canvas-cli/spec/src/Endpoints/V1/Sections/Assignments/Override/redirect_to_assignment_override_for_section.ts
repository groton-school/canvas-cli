type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Redirect to the assignment override for a section
 *
 * Responds with a redirect to the override for the given section, if any (404
 * otherwise).
 *
 * Nickname: redirect_to_assignment_override_for_section
 */
export async function redirect_to_assignment_override_for_section({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/sections/{course_section_id}/assignments/{assignment_id}/override`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
