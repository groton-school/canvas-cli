type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Retrieve captured events
 *
 * Retrieve the set of events captured during a specific submission attempt.
 *
 * Nickname: retrieve_captured_events
 */
export async function retrieve_captured_events({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/events`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
