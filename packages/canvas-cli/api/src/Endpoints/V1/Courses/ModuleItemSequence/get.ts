import { client } from '../../../../Client.js';
import { ModuleItemSequence } from '../../../../Resources/Modules.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get module item sequence
 *
 * Given an asset in a course, find the ModuleItem it belongs to, the previous
 * and next Module Items in the course sequence, and also any applicable mastery
 * path rules
 *
 * Nickname: get_module_item_sequence
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<ModuleItemSequence>(
    `/v1/courses/{course_id}/module_item_sequence`,
    { method: 'GET', params: parameters }
  );
}
