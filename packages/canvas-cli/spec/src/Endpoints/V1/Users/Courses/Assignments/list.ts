type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List assignments for user
 *
 * Returns the paginated list of assignments for the specified user if the
 * current user has rights to view. See {api:AssignmentsApiController#index List
 * assignments} for valid arguments.
 *
 * Nickname: list_assignments_for_user
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/{user_id}/courses/{course_id}/assignments`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
