type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get available quiz IP filters.
 *
 * Get a list of available IP filters for this Quiz.
 *
 * <b>200 OK</b> response code is returned if the request was successful.
 *
 * Nickname: get_available_quiz_ip_filters
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/quizzes/{quiz_id}/ip_filters`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
