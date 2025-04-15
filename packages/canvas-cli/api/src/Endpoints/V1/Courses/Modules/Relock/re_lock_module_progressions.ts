import { client } from '../../../../../Client.js';
import { Module } from '../../../../../Resources/CoursePace.js';

export type re_lock_module_progressionsPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: re_lock_module_progressionsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

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
export async function re_lock_module_progressions(options: Options) {
  return await client().fetchAs<Module>(
    `/api/v1/courses/{course_id}/modules/{id}/relock`,
    {
      method: 'PUT',
      ...options
    }
  );
}
