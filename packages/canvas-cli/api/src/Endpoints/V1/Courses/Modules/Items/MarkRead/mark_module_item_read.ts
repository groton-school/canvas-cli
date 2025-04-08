import { client } from '../../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

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
export async function mark_module_item_read({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/modules/{module_id}/items/{id}/mark_read`,
    { method: 'POST', params: parameters }
  );
}
