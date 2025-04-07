type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get course-level student summary data
 *
 * Returns a summary of per-user access information for all students in a
 * course. This includes total page views, total participations, and a breakdown
 * of on-time/late status for all homework submissions in the course.
 *
 * Each student's summary also includes the maximum number of page views and
 * participations by any student in the course, which may be useful for some
 * visualizations (since determining maximums client side can be tricky with
 * pagination).
 *
 * Nickname: get_course_level_student_summary_data
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/analytics/student_summaries`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
