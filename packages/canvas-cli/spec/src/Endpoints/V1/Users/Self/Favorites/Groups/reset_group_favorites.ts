type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Reset group favorites
 *
 * Reset the current user's group favorites to the default automatically
 * generated list of enrolled group
 *
 * Nickname: reset_group_favorites
 */
export async function reset_group_favorites({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/self/favorites/groups`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
