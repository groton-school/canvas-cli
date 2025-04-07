type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Redirect to the assignment override for a group
 *
 * Responds with a redirect to the override for the given group, if any (404
 * otherwise).
 *
 * Nickname: redirect_to_assignment_override_for_group
 */
export async function redirect_to_assignment_override_for_group({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/groups/{group_id}/assignments/{assignment_id}/override`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
