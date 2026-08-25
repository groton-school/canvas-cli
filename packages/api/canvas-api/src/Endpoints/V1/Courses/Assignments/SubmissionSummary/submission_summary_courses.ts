import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type submission_summary_coursesPathParameters = {
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
  assignment_id: string | number;
};

export type submission_summary_coursesSearchParameters = Masquerade &
  Partial<{
    /**
     * If this argument is true, the response will take into account student groups.
     *
     * type: boolean
     *
     *
     */
    grouped: boolean | string;
    /**
     * If this argument is true, the response will include deactivated students in the summary
(defaults to false).
     *
     * type: boolean
     *
     * 
     */
    include_deactivated: boolean | string;
  }>;

type Options = (
  | {
      path: submission_summary_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: submission_summary_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<submission_summary_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<submission_summary_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: submission_summary_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: submission_summary_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Submission Summary
 *
 * Returns the number of submissions for the given assignment based on gradeable students
that fall into three categories: graded, ungraded, not submitted.
 *
 * nickname: submission_summary_courses
 *
 * 
 *
 * 
 */
export async function submission_summary_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submission_summary`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
