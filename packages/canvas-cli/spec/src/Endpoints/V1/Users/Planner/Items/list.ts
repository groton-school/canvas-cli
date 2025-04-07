type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List planner items
 *
 * Retrieve the paginated list of objects to be shown on the planner for the
 * current user with the associated planner override to override an item's
 * visibility if set.
 *
 * Planner items for a student may also be retrieved by a linked observer. Use
 * the path that accepts a user_id and supply the student's id.
 *
 * Nickname: list_planner_items_users
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/{user_id}/planner/items`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
