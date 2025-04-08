import { client } from '../../../../Client.js';
import { Module } from '../../../../Resources/CoursePace.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List modules
 *
 * A paginated list of the modules in a course
 *
 * Nickname: list_modules
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/courses/{course_id}/modules`, {
    method: 'GET',
    params: parameters
  });
}
