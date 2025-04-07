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
export async function delete_module({ parameters }: Options): Promise<Module> {
  return await (
    await fetch(`/v1/courses/{course_id}/modules/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
