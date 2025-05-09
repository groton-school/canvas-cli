import { client } from '../../../../Client.js';

export type course_todo_itemsPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: course_todo_itemsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

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
export async function course_todo_items(options: Options) {
  return await client().fetchAs<void>(`/api/v1/courses/{course_id}/todo`, {
    method: 'GET',
    ...options
  });
}
