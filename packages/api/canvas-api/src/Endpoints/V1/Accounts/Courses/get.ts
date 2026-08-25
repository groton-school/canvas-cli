import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Course } from '../../../../Resources/Courses.js';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * - &quot;all_courses&quot;: Also search recently deleted courses.
- &quot;permissions&quot;: Include permissions the current user has
  for the course.
- &quot;observed_users&quot;: Include observed users in the enrollments
- &quot;course_image&quot;: Include course image url if a course image has been set
- &quot;banner_image&quot;: Include course banner image url if the course is a Canvas for
  Elementary subject and a banner image has been set
- &quot;concluded&quot;: Optional information to include with Course. Indicates whether
  the course has been concluded, taking course and term dates into account.
- &quot;lti_context_id&quot;: Include course LTI tool id.
- &quot;post_manually&quot;: Include course post policy. If the post policy is manually post grades,
  the value will be true. If the post policy is automatically post grades, the value will be false.
     *
     * 
     *
     * 
     */
    include: string[];
    /**
     * The maximum number of teacher enrollments to show.
If the course contains more teachers than this, instead of giving the teacher
enrollments, the count of teachers will be given under a _teacher_count_ key.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
    teacher_limit: number | string;
  }>;

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
 * Get a single course
 *
 * Return information on a single course.

Accepts the same include[] parameters as the list action plus:
 *
 * nickname: get_single_course_accounts
 *
 * 
 *
 * 
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Course>(
    `/api/v1/accounts/{account_id}/courses/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
