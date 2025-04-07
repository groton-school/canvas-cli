type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List available tabs for a course or group
 *
 * Returns a paginated list of navigation tabs available in the current context.
 *
 * Nickname: list_available_tabs_for_course_or_group_users
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/{user_id}/tabs`, { method: 'GET', body: parameters })
  ).json();
}
