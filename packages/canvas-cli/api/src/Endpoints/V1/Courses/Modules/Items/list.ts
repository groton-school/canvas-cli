import { client } from '../../../../../Client.js';
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
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/modules/{module_id}/items`,
    { method: 'GET', params: parameters }
  );
}
