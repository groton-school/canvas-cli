import { client } from '../../../../Client.js';
import { Module } from '../../../../Resources/CoursePace.js';

type delete_modulePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_modulePathParameters;
};

/**
 * Delete module
 *
 * Delete a module
 *
 * Nickname: delete_module
 */
export async function delete_module({ pathParams }: Options) {
  return await client().fetchAs<Module>(
    `/v1/courses/{course_id}/modules/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
