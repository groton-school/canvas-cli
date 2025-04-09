import { client } from '../../../../../Client.js';

type validate_quiz_access_codePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type validate_quiz_access_codeFormParameters = {
  /** The access code being validated */
  access_code: string;
};

type Options = {
  pathParams: validate_quiz_access_codePathParameters;
  params?: validate_quiz_access_codeFormParameters;
};

/**
 * Validate quiz access code
 *
 * Accepts an access code and returns a boolean indicating whether that access
 * code is correct
 *
 * Nickname: validate_quiz_access_code
 */
export async function validate_quiz_access_code({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<boolean>(
    `/v1/courses/{course_id}/quizzes/{id}/validate_access_code`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
