import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get available quiz IP filters.
 *
 * Get a list of available IP filters for this Quiz.
 *
 * <b>200 OK</b> response code is returned if the request was successful.
 *
 * Nickname: get_available_quiz_ip_filters
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/ip_filters`,
    {
      method: 'GET',
      pathParams
    }
  );
}
