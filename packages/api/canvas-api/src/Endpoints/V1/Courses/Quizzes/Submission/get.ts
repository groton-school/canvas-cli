import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  quiz_id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
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
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/submission`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
