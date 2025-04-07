type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get effective due dates
 *
 * For each assignment in the course, returns each assigned student's ID and
 * their corresponding due date along with some grading period data. Returns a
 * collection with keys representing assignment IDs and values as a collection
 * containing keys representing student IDs and values representing the
 * student's effective due_at, the grading_period_id of which the due_at falls
 * in, and whether or not the grading period is closed
 * (in_closed_grading_period)
 *
 * The list of assignment IDs for which effective student due dates are
 * requested. If not provided, all assignments in the course will be used.
 *
 * Nickname: get_effective_due_dates
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/effective_due_dates`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
