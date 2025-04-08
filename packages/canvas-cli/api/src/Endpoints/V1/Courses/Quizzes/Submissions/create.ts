import { client } from '../../../../../Client.js';

type Parameters = {
  /** Access code for the Quiz, if any. */
  access_code: string;
  /**
   * Whether this should be a preview QuizSubmission and not count towards the
   * user's course record. Teachers only.
   */
  preview: boolean;
};

type Options = {
  parameters: Parameters;
};

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
export async function create({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/submissions`,
    { method: 'POST', params: parameters }
  );
}
