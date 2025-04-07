type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Fetching the latest quiz statistics
 *
 * This endpoint provides statistics for all quiz versions, or for a specific
 * quiz version, in which case the output is guaranteed to represent the
 * _latest_ and most current version of the quiz.
 *
 * <b>200 OK</b> response code is returned if the request was successful.
 *
 * Nickname: fetching_latest_quiz_statistics
 */
export async function fetching_latest_quiz_statistics({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/quizzes/{quiz_id}/statistics`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
