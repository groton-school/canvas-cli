import { client } from '../../../../../Client.js';
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
export async function show_module_item({ parameters }: Options) {
  return await client().fetchAs<ModuleItem>(
    `/v1/courses/{course_id}/modules/{module_id}/items/{id}`,
    { method: 'GET', params: parameters }
  );
}
