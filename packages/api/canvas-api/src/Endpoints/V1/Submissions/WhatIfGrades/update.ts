import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: updateSearchParameters;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
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
