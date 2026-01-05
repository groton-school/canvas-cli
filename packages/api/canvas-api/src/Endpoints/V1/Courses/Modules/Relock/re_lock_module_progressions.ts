import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { Module } from '../../../../../Resources/CoursePace.js';

export type re_lock_module_progressionsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type re_lock_module_progressionsSearchParameters = Masquerade;

type Options = {
  pathParams: re_lock_module_progressionsPathParameters;
} & (
  | {
      searchParams?: Partial<re_lock_module_progressionsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: re_lock_module_progressionsSearchParameters;
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
  const response = await client().fetchAs<Module>(
    `/api/v1/courses/{course_id}/modules/{id}/relock`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
