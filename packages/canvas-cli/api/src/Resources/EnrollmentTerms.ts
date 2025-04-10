import { JSONObject } from '@battis/typescript-tricks';

export type EnrollmentTerm = {
  /**
   * The unique identifier for the enrollment term.
   *
   * Type: integer
   */
  id: number;
  /**
   * The SIS id of the term. Only included if the user has permission to view
   * SIS information.
   */
  sis_term_id: string;
  /**
   * The unique identifier for the SIS import. This field is only included if
   * the user has permission to manage SIS information.
   *
   * Type: integer
   */
  sis_import_id: number;
  /** The name of the term. */
  name: string;
  /**
   * The datetime of the start of the term.
   *
   * Format: date-time
   */
  start_at: string;
  /**
   * The datetime of the end of the term.
   *
   * Format: date-time
   */
  end_at: string;
  /** The state of the term. Can be 'active' or 'deleted'. */
  workflow_state: string;
  /**
   * Term date overrides for specific enrollment types
   *
   * Object
   */
  overrides: JSONObject;
  /**
   * The number of courses in the term (available via include)
   *
   * Type: integer
   */
  course_count: number;
};

export type EnrollmentTermsList = {
  /** A paginated list of all terms in the account */
  enrollment_terms: EnrollmentTerm[];
};
