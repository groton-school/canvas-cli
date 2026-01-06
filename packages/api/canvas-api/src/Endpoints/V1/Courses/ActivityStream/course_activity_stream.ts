import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type course_activity_streamPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type course_activity_streamSearchParameters = Masquerade;

type Options = {
  pathParams: course_activity_streamPathParameters;
} & (
  | {
      searchParams?: Partial<course_activity_streamSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: course_activity_streamSearchParameters;
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/activity_stream`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
