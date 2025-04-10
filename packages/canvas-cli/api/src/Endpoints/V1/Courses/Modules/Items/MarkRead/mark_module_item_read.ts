import { client } from '../../../../../../Client.js';

export type mark_module_item_readPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  module_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: mark_module_item_readPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function mark_module_item_read({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/modules/{module_id}/items/{id}/mark_read`,
    {
      method: 'POST',
      pathParams
    }
  );
}
