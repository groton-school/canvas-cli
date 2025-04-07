type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Mark module item as done/not done
 *
 * Mark a module item as done/not done. Use HTTP method PUT to mark as done, and
 * DELETE to mark as not done.
 *
 * Nickname: mark_module_item_as_done_not_done
 */
export async function mark_module_item_as_done_not_done({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/modules/{module_id}/items/{id}/done`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
