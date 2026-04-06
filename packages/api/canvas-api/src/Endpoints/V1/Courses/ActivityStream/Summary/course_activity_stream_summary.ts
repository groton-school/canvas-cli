import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type course_activity_stream_summaryPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type course_activity_stream_summarySearchParameters = Masquerade;

type Options = (
  | {
      path: course_activity_stream_summaryPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: course_activity_stream_summaryPathParameters;
    }
) &
  (
    | {
        query?: Partial<course_activity_stream_summarySearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<course_activity_stream_summarySearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: course_activity_stream_summarySearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: course_activity_stream_summarySearchParameters;
          }
      ) & {
        strict: true;
      })
  );

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
export async function course_activity_stream_summary(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/activity_stream/summary`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
