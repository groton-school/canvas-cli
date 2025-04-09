import { client } from '../../../../../Client.js';

type submission_summary_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
};

type submission_summary_coursesSearchParameters = {
  /**
   * If this argument is true, the response will take into account student
   * groups.
   */
  grouped: boolean;
};

type Options = {
  pathParams: submission_summary_coursesPathParameters;
  searchParams?: submission_summary_coursesSearchParameters;
};

/**
 * Submission Summary
 *
 * Returns the number of submissions for the given assignment based on gradeable
 * students that fall into three categories: graded, ungraded, not submitted.
 *
 * Nickname: submission_summary_courses
 */
export async function submission_summary_courses({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/submission_summary`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
