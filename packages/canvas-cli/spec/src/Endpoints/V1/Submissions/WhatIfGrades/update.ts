import { gradesGradessubmissionSubmission } from '';

type Parameters = {
  /**
   * The score the student wants to test
   *
   * Format: float
   */
  student_entered_score: number;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update a submission's what-if score and calculate grades
 *
 * Enter a what if score for a submission and receive the calculated grades
 * Grade calculation is a costly operation, so this API should be used
 * sparingly
 *
 * Nickname: update_submission_s_what_if_score_and_calculate_grades
 */
export async function update({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/submissions/{id}/what_if_grades`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
