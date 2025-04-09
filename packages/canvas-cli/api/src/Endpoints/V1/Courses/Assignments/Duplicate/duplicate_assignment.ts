import { client } from '../../../../../Client.js';
import { Assignment } from '../../../../../Resources/Assignments.js';

type duplicate_assignmentPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
};

type duplicate_assignmentFormParameters = {
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
  pathParams: duplicate_assignmentPathParameters;
  params?: duplicate_assignmentFormParameters;
};

/**
 * Duplicate assignment
 *
 * Duplicate an assignment and return a json based on result_type argument.
 *
 * Nickname: duplicate_assignment
 */
export async function duplicate_assignment({ pathParams, params }: Options) {
  return await client().fetchAs<Assignment>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/duplicate`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
