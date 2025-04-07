type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get current quiz submission times.
 *
 * Get the current timing data for the quiz attempt, both the end_at timestamp
 * and the time_left parameter.
 *
 * <b>Responses</b>
 *
 * <b>200 OK</b> if the request was successful
 *
 * Nickname: get_current_quiz_submission_times
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/time`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
