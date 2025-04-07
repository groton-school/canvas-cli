import { ModuleItem } from '../../../../../Resources/CoursePace.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show module item
 *
 * Get information about a single module item
 *
 * Nickname: show_module_item
 */
export async function show_module_item({
  parameters
}: Options): Promise<ModuleItem> {
  return await (
    await fetch(`/v1/courses/{course_id}/modules/{module_id}/items/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
