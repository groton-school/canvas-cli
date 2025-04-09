import { client } from '../../../../Client.js';
import { EnrollmentTerm } from '../../../../Resources/EnrollmentTerms.js';

export type createPathParameters = {
  /** ID */
  account_id: string;
};

export type createFormParameters = {
  /** The name of the term. */
  'enrollment_term[name]': string;
  /**
   * The day/time the term starts. Accepts times in ISO 8601 format, e.g.
   * 2015-01-10T18:48:00Z.
   *
   * Format: date-time
   */
  'enrollment_term[start_at]': string;
  /**
   * The day/time the term ends. Accepts times in ISO 8601 format, e.g.
   * 2015-01-10T18:48:00Z.
   *
   * Format: date-time
   */
  'enrollment_term[end_at]': string;
  /** The unique SIS identifier for the term. */
  'enrollment_term[sis_term_id]': string;
  /**
   * The day/time the term starts, overridden for the given enrollment type.
   * enrollment_type* can be one of StudentEnrollment, TeacherEnrollment,
   * TaEnrollment, or DesignerEnrollment
   *
   * Format: date-time
   */
  'enrollment_term[overrides][enrollment_type][start_at]': string;
  /**
   * The day/time the term ends, overridden for the given enrollment type.
   * enrollment_type* can be one of StudentEnrollment, TeacherEnrollment,
   * TaEnrollment, or DesignerEnrollment
   *
   * Format: date-time
   */
  'enrollment_term[overrides][enrollment_type][end_at]': string;
};

type Options = {
  pathParams: createPathParameters;
  params?: createFormParameters;
};

/**
 * Create enrollment term
 *
 * Create a new enrollment term for the specified account.
 *
 * Nickname: create_enrollment_term
 */
export async function create({ pathParams, params }: Options) {
  return await client().fetchAs<EnrollmentTerm>(
    `/v1/accounts/{account_id}/terms`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
