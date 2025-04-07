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
export async function validate_quiz_access_code({
  parameters
}: Options): Promise<boolean> {
  return await (
    await fetch(`/v1/courses/{course_id}/quizzes/{id}/validate_access_code`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
