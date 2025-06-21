import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type validate_quiz_access_codePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type validate_quiz_access_codeSearchParameters = Masquerade;

export type validate_quiz_access_codeFormParameters = Masquerade & {
  /** The access code being validated */
  access_code: string;
};

type Options = {
  pathParams: validate_quiz_access_codePathParameters;
} & (
  | {
      searchParams?: Partial<validate_quiz_access_codeSearchParameters>;
      params?: Partial<validate_quiz_access_codeFormParameters>;
      strict?: false;
    }
  | {
      searchParams: validate_quiz_access_codeSearchParameters;
      params: validate_quiz_access_codeFormParameters;
      strict: true;
    }
);

/**
 * Validate quiz access code
 *
 * Accepts an access code and returns a boolean indicating whether that access
 * code is correct
 *
 * Nickname: validate_quiz_access_code
 */
export async function validate_quiz_access_code(options: Options) {
  const response = await client().fetchAs<boolean>(
    `/api/v1/courses/{course_id}/quizzes/{id}/validate_access_code`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
