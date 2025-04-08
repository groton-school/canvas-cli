import { client } from '../../../../Client.js';
import { Module } from '../../../../Resources/CoursePace.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show module
 *
 * Get information about a single module
 *
 * Nickname: show_module
 */
export async function show_module({ parameters }: Options) {
  return await client().fetchAs<Module>(
    `/v1/courses/{course_id}/modules/{id}`,
    { method: 'GET', params: parameters }
  );
}
