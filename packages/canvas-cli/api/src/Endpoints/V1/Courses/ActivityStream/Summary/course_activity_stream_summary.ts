import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
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
export async function course_activity_stream_summary({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/activity_stream/summary`,
    { method: 'GET', params: parameters }
  );
}
