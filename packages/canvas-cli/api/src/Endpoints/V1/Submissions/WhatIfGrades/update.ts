import { gradesGradessubmissionSubmission } from '';
import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /**
   * The score the student wants to test
   *
   * Format: 'float'
   */
  student_entered_score: number;
};

type Options = {
  pathParams: updatePathParameters;
  params?: updateFormParameters;
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
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/submissions/{id}/what_if_grades`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
