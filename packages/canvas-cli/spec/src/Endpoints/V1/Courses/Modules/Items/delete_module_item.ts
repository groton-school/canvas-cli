import { ModuleItem } from '../../../../../Resources/CoursePace.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete module item
 *
 * Delete a module item
 *
 * Nickname: delete_module_item
 */
export async function delete_module_item({
  parameters
}: Options): Promise<ModuleItem> {
  return await (
    await fetch(`/v1/courses/{course_id}/modules/{module_id}/items/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
