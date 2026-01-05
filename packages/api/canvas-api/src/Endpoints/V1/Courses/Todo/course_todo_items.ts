import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type course_todo_itemsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type course_todo_itemsSearchParameters = Masquerade;

type Options = {
  pathParams: course_todo_itemsPathParameters;
} & (
  | {
      searchParams?: Partial<course_todo_itemsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: course_todo_itemsSearchParameters;
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/todo`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
