type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List the TODO items
 *
 * A paginated list of the current user's list of todo items.
 *
 * There is a limit to the number of items returned.
 *
 * The `ignore` and `ignore_permanently` URLs can be used to update the user's
 * preferences on what items will be displayed. Performing a DELETE request
 * against the `ignore` URL will hide that item from future todo item requests,
 * until the item changes. Performing a DELETE request against the
 * `ignore_permanently` URL will hide that item forever.
 *
 * Nickname: list_todo_items
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/self/todo`, { method: 'GET', body: parameters })
  ).json();
}
