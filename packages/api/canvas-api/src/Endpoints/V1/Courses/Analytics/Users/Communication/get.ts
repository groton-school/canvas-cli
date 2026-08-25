import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type getPathParameters = {
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
  student_id: string | number;
};

export type getSearchParameters = Masquerade;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get user-in-a-course-level messaging data
 *
 * Returns messaging "hits" grouped by day through the entire history of the
course. Returns a hash containing the number of instructor-to-student messages,
and student-to-instructor messages, where the hash keys are dates
in the format "YYYY-MM-DD". Message hits include Conversation messages and
comments on homework submissions.
 *
 * nickname: get_user_in_a_course_level_messaging_data
 *
 * 
 *
 * 
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/analytics/users/{student_id}/communication`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
