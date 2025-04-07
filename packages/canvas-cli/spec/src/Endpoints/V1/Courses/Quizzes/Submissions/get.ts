type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single quiz submission.
 *
 * Get a single quiz submission.
 *
 * <b>200 OK</b> response code is returned if the request was successful.
 *
 * Nickname: get_single_quiz_submission
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
