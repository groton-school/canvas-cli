import { client } from '../../../../../Client.js';

export type reorder_pinned_topics_coursesPathParameters = {
  /** ID */
  course_id: string;
};

export type reorder_pinned_topics_coursesFormParameters = {
  /**
   * The ids of the pinned discussion topics in the desired order. (For
   * example, "order=104,102,103".)
   *
   * Format: 'int64'
   */
  order: number[];
};

type Options = {
  pathParams: reorder_pinned_topics_coursesPathParameters;
} & (
  | {
      params?: Partial<reorder_pinned_topics_coursesFormParameters>;
      strict?: false;
    }
  | {
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
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/reorder`,
    {
      method: 'POST',
      ...options
    }
  );
}
