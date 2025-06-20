import { client } from '../../../../../../Client.js';

export type disable_summary_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: disable_summary_coursesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Disable summary
 *
 * Deprecated, to remove after VICE-5047 gets merged Disables the summary for a
 * discussion topic.
 *
 * Nickname: disable_summary_courses
 */
export async function disable_summary_courses(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/summaries/disable`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
