type Parameters = {};

type Options = {
  parameters: Parameters;
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
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignments/{assignment_id}/submission_summary`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
