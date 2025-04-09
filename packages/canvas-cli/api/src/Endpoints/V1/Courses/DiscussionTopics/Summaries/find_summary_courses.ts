import { client } from '../../../../../Client.js';

export type find_summary_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: find_summary_coursesPathParameters;
};

/**
 * Find Summary
 *
 * Returns the last generated summary for a discussion topic and the current
 * user
 *
 * Nickname: find_summary_courses
 */
export async function find_summary_courses({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/discussion_topics/{topic_id}/summaries`,
    {
      method: 'GET',
      pathParams
    }
  );
}
