import { client } from '../../../../../Client.js';
import { QuizAssignmentOverrideSetContainer } from '../../../../../Resources/QuizAssignmentOverrides.js';

export type retrieve_assignment_overridden_dates_for_classic_quizzesPathParameters =
  {
    /** ID */
    course_id: string;
  };

export type retrieve_assignment_overridden_dates_for_classic_quizzesSearchParameters =
  Partial<{
    /**
     * An array of quiz IDs. If omitted, overrides for all quizzes available to
     * the operating user will be returned.
     *
     * Format: 'int64'
     */
    'quiz_assignment_overrides[quiz_ids]': number[];
  }>;

type Options = {
  pathParams: retrieve_assignment_overridden_dates_for_classic_quizzesPathParameters;
} & (
  | {
      searchParams?: Partial<retrieve_assignment_overridden_dates_for_classic_quizzesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: retrieve_assignment_overridden_dates_for_classic_quizzesSearchParameters;
      strict: true;
    }
);

/**
 * Retrieve assignment-overridden dates for Classic Quizzes
 *
 * Retrieve the actual due-at, unlock-at, and available-at dates for quizzes
 * based on the assignment overrides active for the current API user.
 *
 * Nickname: retrieve_assignment_overridden_dates_for_classic_quizzes
 */
export async function retrieve_assignment_overridden_dates_for_classic_quizzes(
  options: Options
) {
  return await client().fetchAs<QuizAssignmentOverrideSetContainer>(
    `/api/v1/courses/{course_id}/quizzes/assignment_overrides`,
    {
      method: 'GET',
      ...options
    }
  );
}
