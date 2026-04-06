import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type course_activity_streamPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type course_activity_streamSearchParameters = Masquerade;

type Options = (
  | {
      path: course_activity_streamPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: course_activity_streamPathParameters;
    }
) &
  (
    | {
        query?: Partial<course_activity_streamSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<course_activity_streamSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: course_activity_streamSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: course_activity_streamSearchParameters;
          }
      ) & {
        strict: true;
      })
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
