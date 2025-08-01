import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type reorder_pinned_topics_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type reorder_pinned_topics_coursesSearchParameters = Masquerade;

export type reorder_pinned_topics_coursesFormParameters = Masquerade & {
  /**
   * The ids of the pinned discussion topics in the desired order. (For
   * example, "order=104,102,103".)
   *
   * Format: 'int64'
   */
  order: number | string[];
};

type Options = {
  pathParams: reorder_pinned_topics_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<reorder_pinned_topics_coursesSearchParameters>;
      params?: Partial<reorder_pinned_topics_coursesFormParameters>;
      strict?: false;
    }
  | {
      searchParams: reorder_pinned_topics_coursesSearchParameters;
      params: reorder_pinned_topics_coursesFormParameters;
      strict: true;
    }
);

/**
 * Reorder pinned topics
 *
 * Puts the pinned discussion topics in the specified order. All pinned topics
 * should be included.
 *
 * Nickname: reorder_pinned_topics_courses
 */
export async function reorder_pinned_topics_courses(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/reorder`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
