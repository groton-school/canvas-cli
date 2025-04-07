import { Module } from '../../../../../Resources/CoursePace.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Re-lock module progressions
 *
 * Resets module progressions to their default locked state and recalculates
 * them based on the current requirements.
 *
 * Adding progression requirements to an active course will not lock students
 * out of modules they have already unlocked unless this action is called.
 *
 * Nickname: re_lock_module_progressions
 */
export async function re_lock_module_progressions({
  parameters
}: Options): Promise<Module> {
  return await (
    await fetch(`/v1/courses/{course_id}/modules/{id}/relock`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
