import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
  /** ID */
  id: string;
};

export type getSearchParameters = {
  /** Associations to include with the quiz submission. */
  include: string[];
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a single quiz submission.
 *
 * Get a single quiz submission.
 *
 * <b>200 OK</b> response code is returned if the request was successful.
 *
 * Nickname: get_single_quiz_submission
 */
export async function get(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
