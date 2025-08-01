import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { EnrollmentTerm } from '../../../../Resources/EnrollmentTerms.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
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
   *
   * Type: boolean
   */
  override_sis_stickiness: boolean | string;
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
 * Update enrollment term
 *
 * Update an existing enrollment term for the specified account.
 *
 * Nickname: update_enrollment_term
 */
export async function update(options: Options) {
  const response = await client().fetchAs<EnrollmentTerm>(
    `/api/v1/accounts/{account_id}/terms/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
