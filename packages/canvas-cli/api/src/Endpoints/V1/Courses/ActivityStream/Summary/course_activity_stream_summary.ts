import { client } from '../../../../../Client.js';

export type course_activity_stream_summaryPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: course_activity_stream_summaryPathParameters;
};

/**
 * Course activity stream summary
 *
 * Returns a summary of the current user's course-specific activity stream.
 *
 * For full documentation, see the API documentation for the user activity
 * stream summary, in the user api.
 *
 * Nickname: course_activity_stream_summary
 */
export async function course_activity_stream_summary({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/activity_stream/summary`,
    {
      method: 'GET',
      pathParams
    }
  );
}
