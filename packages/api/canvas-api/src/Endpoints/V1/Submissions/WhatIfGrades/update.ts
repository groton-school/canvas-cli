import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { gradesGradessubmissionSubmission } from '../../../../Overrides.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade & Paginated;

export type updateFormParameters = Masquerade & {
  /**
   * The score the student wants to test
   *
   * Type: number
   *
   * Format: 'float'
   */
  student_entered_score: number | string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a submission's what-if score and calculate grades
 *
 * Enter a what if score for a submission and receive the calculated grades
 * Grade calculation is a costly operation, so this API should be used
 * sparingly
 *
 * Nickname: update_submission_s_what_if_score_and_calculate_grades
 */
export async function update(options: Options) {
  const response = await client().fetchAs<gradesGradessubmissionSubmission[]>(
    `/api/v1/submissions/{id}/what_if_grades`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
