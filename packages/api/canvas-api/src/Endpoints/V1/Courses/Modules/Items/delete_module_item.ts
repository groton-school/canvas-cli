import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { ModuleItem } from '../../../../../Resources/CoursePace.js';

export type delete_module_itemPathParameters = {
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
  module_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_module_itemSearchParameters = Masquerade;

type Options = {
  pathParams: delete_module_itemPathParameters;
} & (
  | {
      searchParams?: Partial<delete_module_itemSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_module_itemSearchParameters;
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
  const response = await client().fetchAs<ModuleItem>(
    `/api/v1/courses/{course_id}/modules/{module_id}/items/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
