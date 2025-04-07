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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/modules`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
