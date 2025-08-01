import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type createPathParameters = {
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

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** Access code for the Quiz, if any. */
  access_code: string;
  /**
   * Whether this should be a preview QuizSubmission and not count towards the
   * user's course record. Teachers only.
   *
   * Type: boolean
   */
  preview: boolean | string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create the quiz submission (start a quiz-taking session)
 *
 * Start taking a Quiz by creating a QuizSubmission which you can use to answer
 * questions and submit your answers.
 *
 * <b>Responses</b>
 *
 * <b>200 OK</b> if the request was successful <b>400 Bad Request</b> if the
 * quiz is locked <b>403 Forbidden</b> if an invalid access code is specified
 * <b>403 Forbidden</b> if the Quiz's IP filter restriction does not pass <b>409
 * Conflict</b> if a QuizSubmission already exists for this user and quiz
 *
 * Nickname: create_quiz_submission_start_quiz_taking_session
 */
export async function create(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/submissions`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
