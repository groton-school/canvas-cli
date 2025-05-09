import { client } from '../../../../../Client.js';
import { ModuleItem } from '../../../../../Resources/CoursePace.js';

export type delete_module_itemPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  module_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_module_itemPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete module item
 *
 * Delete a module item
 *
 * Nickname: delete_module_item
 */
export async function delete_module_item(options: Options) {
  return await client().fetchAs<ModuleItem>(
    `/api/v1/courses/{course_id}/modules/{module_id}/items/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
