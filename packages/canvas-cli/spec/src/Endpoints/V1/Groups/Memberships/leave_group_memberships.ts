type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Leave a group
 *
 * Leave a group if you are allowed to leave (some groups, such as sets of
 * course groups created by teachers, cannot be left). You may also use 'self'
 * in place of a membership_id.
 *
 * Nickname: leave_group_memberships
 */
export async function leave_group_memberships({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/groups/{group_id}/memberships/{membership_id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
