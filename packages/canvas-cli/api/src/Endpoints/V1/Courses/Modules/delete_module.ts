import { client } from '../../../../Client.js';
import { Module } from '../../../../Resources/CoursePace.js';

export type delete_modulePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_modulePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete module
 *
 * Delete a module
 *
 * Nickname: delete_module
 */
export async function delete_module(options: Options) {
  return await client().fetchAs<Module>(
    `/api/v1/courses/{course_id}/modules/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
