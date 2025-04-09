import { client } from '../../../../../../Client.js';

type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
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
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/time`,
    {
      method: 'GET',
      pathParams
    }
  );
}
