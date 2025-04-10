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
 * Disables the summary for a discussion topic.
 *
 * Nickname: disable_summary_courses
 */
export async function disable_summary_courses({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/discussion_topics/{topic_id}/summaries/disable`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
