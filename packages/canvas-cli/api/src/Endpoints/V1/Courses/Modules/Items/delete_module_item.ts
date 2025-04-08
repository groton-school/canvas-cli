import { client } from '../../../../../Client.js';
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
export async function delete_module_item({ parameters }: Options) {
  return await client().fetchAs<ModuleItem>(
    `/v1/courses/{course_id}/modules/{module_id}/items/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
