import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type delete_entry_coursesPathParameters = {
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
  topic_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_entry_coursesSearchParameters = Masquerade;

type Options = {
  pathParams: delete_entry_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<delete_entry_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_entry_coursesSearchParameters;
      strict: true;
    }
);

/**
 * Delete an entry
 *
 * Delete a discussion entry.
 *
 * The entry must have been created by the current user, or the current user
 * must have admin rights to the discussion. If the delete is not allowed, a 401
 * will be returned.
 *
 * The discussion will be marked deleted, and the user_id and message will be
 * cleared out.
 *
 * Nickname: delete_entry_courses
 */
export async function delete_entry_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
