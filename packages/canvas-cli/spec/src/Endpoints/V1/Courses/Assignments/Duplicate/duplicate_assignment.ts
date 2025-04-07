import { Assignment } from '../../../../../Resources/Assignments.js';

type Parameters = {
  /**
   * Optional information: When the root account has the feature
   * `newquizzes_on_quiz_page` enabled and this argument is set to "Quiz" the
   * response will be serialized into a quiz
   * format({file:doc/api/quizzes.html#Quiz}); When this argument isn't
   * specified the response will be serialized into an assignment format;
   */
  result_type: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Duplicate assignment
 *
 * Duplicate an assignment and return a json based on result_type argument.
 *
 * Nickname: duplicate_assignment
 */
export async function duplicate_assignment({
  parameters
}: Options): Promise<Assignment> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignments/{assignment_id}/duplicate`,
      { method: 'POST', body: parameters }
    )
  ).json();
}
