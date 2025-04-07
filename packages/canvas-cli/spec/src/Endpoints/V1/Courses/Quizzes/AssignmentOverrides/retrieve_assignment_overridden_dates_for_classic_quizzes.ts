import { QuizAssignmentOverrideSetContainer } from '../../../../../Resources/QuizAssignmentOverrides.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Retrieve assignment-overridden dates for Classic Quizzes
 *
 * Retrieve the actual due-at, unlock-at, and available-at dates for quizzes
 * based on the assignment overrides active for the current API user.
 *
 * Nickname: retrieve_assignment_overridden_dates_for_classic_quizzes
 */
export async function retrieve_assignment_overridden_dates_for_classic_quizzes({
  parameters
}: Options): Promise<QuizAssignmentOverrideSetContainer> {
  return await (
    await fetch(`/v1/courses/{course_id}/quizzes/assignment_overrides`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
