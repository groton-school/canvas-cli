import { client } from '../../../../Client.js';

type course_todo_itemsPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: course_todo_itemsPathParameters;
};

/**
 * Course TODO items
 *
 * Returns the current user's course-specific todo items.
 *
 * For full documentation, see the API documentation for the user todo items, in
 * the user api.
 *
 * Nickname: course_todo_items
 */
export async function course_todo_items({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/courses/{course_id}/todo`, {
    method: 'GET',
    pathParams
  });
}
