import { client } from '../../../../../Client.js';

export type find_last_summary_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: find_last_summary_coursesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Find Last Summary
 *
 * Returns: (1) last userInput (what current user had keyed in to produce the
 * last discussion summary), (2) last discussion summary generated by the
 * current user for current discussion topic, based on userInput, (3) and some
 * usage information.
 *
 * Nickname: find_last_summary_courses
 */
export async function find_last_summary_courses(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/summaries`,
    {
      method: 'GET',
      ...options
    }
  );
}
