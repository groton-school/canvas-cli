import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type disable_summary_coursesPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  topic_id: string | number;
};

export type disable_summary_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: disable_summary_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: disable_summary_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<disable_summary_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<disable_summary_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: disable_summary_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: disable_summary_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Disable summary
 *
 * Deprecated, to remove after VICE-5047 gets merged
Disables the summary for a discussion topic.
 *
 * nickname: disable_summary_courses
 *
 * 
 *
 * 
 */
export async function disable_summary_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/summaries/disable`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
