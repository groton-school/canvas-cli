import { client } from '../../../../../Client.js';
import { Assignment } from '../../../../../Resources/Assignments.js';

export type duplicate_assignmentPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
};

export type duplicate_assignmentFormParameters = {
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
} & (
  | {
      params?: Partial<duplicate_assignmentFormParameters>;
      strict?: false;
    }
  | {
      params: duplicate_assignmentFormParameters;
      strict: true;
    }
);

/**
 * Duplicate assignment
 *
 * Duplicate an assignment and return a json based on result_type argument.
 *
 * Nickname: duplicate_assignment
 */
export async function duplicate_assignment(options: Options) {
  return await client().fetchAs<Assignment>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/duplicate`,
    {
      method: 'POST',
      ...options
    }
  );
}
