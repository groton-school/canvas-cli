import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';

export type mark_module_item_readPathParameters = {
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

export type mark_module_item_readSearchParameters = Masquerade;

type Options = {
  pathParams: mark_module_item_readPathParameters;
} & (
  | {
      searchParams?: Partial<mark_module_item_readSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_module_item_readSearchParameters;
      strict: true;
    }
);

/**
 * Mark module item read
 *
 * Fulfills "must view" requirement for a module item. It is generally not
 * necessary to do this explicitly, but it is provided for applications that
 * need to access external content directly (bypassing the html_url redirect
 * that normally allows Canvas to fulfill "must view" requirements).
 *
 * This endpoint cannot be used to complete requirements on locked or
 * unpublished module items.
 *
 * Nickname: mark_module_item_read
 */
export async function mark_module_item_read(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/modules/{module_id}/items/{id}/mark_read`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
