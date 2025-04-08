import { client } from '../../../../../Client.js';

type Parameters = {
  /** The access code being validated */
  access_code: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Validate quiz access code
 *
 * Accepts an access code and returns a boolean indicating whether that access
 * code is correct
 *
 * Nickname: validate_quiz_access_code
 */
export async function validate_quiz_access_code({ parameters }: Options) {
  return await client().fetchAs<boolean>(
    `/v1/courses/{course_id}/quizzes/{id}/validate_access_code`,
    { method: 'POST', params: parameters }
  );
}
