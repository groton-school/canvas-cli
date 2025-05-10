import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
};

export type getSearchParameters = Partial<{
  /** Associations to include with the quiz submission. */
  include: string[];
}>;

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
 * Get the quiz submission.
 *
 * Get the submission for this quiz for the current user.
 *
 * <b>200 OK</b> response code is returned if the request was successful.
 *
 * Nickname: get_quiz_submission
 */
export async function get(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/submission`,
    {
      method: 'GET',
      ...options
    }
  );
}
