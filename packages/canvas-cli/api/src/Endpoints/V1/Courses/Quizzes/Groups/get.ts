import { client } from '../../../../../Client.js';
import { QuizGroup } from '../../../../../Resources/QuizQuestionGroups.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get a single quiz group
 *
 * Returns details of the quiz group with the given id.
 *
 * Nickname: get_single_quiz_group
 */
export async function get(options: Options) {
  return await client().fetchAs<QuizGroup>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
