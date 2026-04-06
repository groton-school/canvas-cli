import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type submission_summary_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  assignment_id: string | number;
};

export type submission_summary_coursesSearchParameters = Masquerade &
  Partial<{
    /**
     * If this argument is true, the response will take into account student
     * groups.
     *
     * Type: boolean
     */
    grouped: boolean | string;
    /**
     * If this argument is true, the response will include deactivated students
     * in the summary (defaults to false).
     *
     * Type: boolean
     */
    include_deactivated: boolean | string;
  }>;

type Options = {
  pathParams: submission_summary_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<submission_summary_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: submission_summary_coursesSearchParameters;
      strict: true;
    }
);

/**
 * Submission Summary
 *
 * Returns the number of submissions for the given assignment based on gradeable
 * students that fall into three categories: graded, ungraded, not submitted.
 *
 * Nickname: submission_summary_courses
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
