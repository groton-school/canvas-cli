import { client } from '../../../../Client.js';
import { Module } from '../../../../Resources/CoursePace.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete module
 *
 * Delete a module
 *
 * Nickname: delete_module
 */
export async function delete_module({ parameters }: Options) {
  return await client().fetchAs<Module>(
    `/v1/courses/{course_id}/modules/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
