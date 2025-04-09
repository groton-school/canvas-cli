import { client } from '../../../../Client.js';
import { EnrollmentTerm } from '../../../../Resources/EnrollmentTerms.js';

export type updatePathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type updateFormParameters = {
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
  /**
   * Default is true. If false, any fields containing “sticky” changes will
   * not be updated. See SIS CSV Format documentation for information on which
   * fields can have SIS stickiness
   */
  override_sis_stickiness: boolean;
};

type Options = {
  pathParams: updatePathParameters;
  params?: updateFormParameters;
};

/**
 * Update enrollment term
 *
 * Update an existing enrollment term for the specified account.
 *
 * Nickname: update_enrollment_term
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<EnrollmentTerm>(
    `/v1/accounts/{account_id}/terms/{id}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
