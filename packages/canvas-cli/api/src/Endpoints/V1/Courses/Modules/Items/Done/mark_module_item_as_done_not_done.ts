import { client } from '../../../../../../Client.js';

export type mark_module_item_as_done_not_donePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  module_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: mark_module_item_as_done_not_donePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Mark module item as done/not done
 *
 * Mark a module item as done/not done. Use HTTP method PUT to mark as done, and
 * DELETE to mark as not done.
 *
 * Nickname: mark_module_item_as_done_not_done
 */
export async function mark_module_item_as_done_not_done(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/modules/{module_id}/items/{id}/done`,
    {
      method: 'PUT',
      ...options
    }
  );
}
