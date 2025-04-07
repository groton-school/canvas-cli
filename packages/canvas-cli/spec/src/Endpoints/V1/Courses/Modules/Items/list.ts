import { ModuleItem } from '../../../../../Resources/CoursePace.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List module items
 *
 * A paginated list of the items in a module
 *
 * Nickname: list_module_items
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/modules/{module_id}/items`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
