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
export async function get({
  parameters
}: Options): Promise<ModuleItemSequence> {
  return await (
    await fetch(`/v1/courses/{course_id}/module_item_sequence`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
