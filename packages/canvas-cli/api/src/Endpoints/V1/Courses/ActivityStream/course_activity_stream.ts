import { client } from '../../../../Client.js';

export type course_activity_streamPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: course_activity_streamPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Course activity stream
 *
 * Returns the current user's course-specific activity stream, paginated.
 *
 * For full documentation, see the API documentation for the user activity
 * stream, in the user api.
 *
 * Nickname: course_activity_stream
 */
export async function course_activity_stream(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/activity_stream`,
    {
      method: 'GET',
      ...options
    }
  );
}
