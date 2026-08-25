import { JSONObject, JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type EnrollmentTerm = {
  /**
   * The unique identifier for the enrollment term.
   *
   * type: integer
   */
  id: number | string;
  /**
   * The SIS id of the term. Only included if the user has permission to view SIS information.
   *
   *
   */
  sis_term_id: string;
  /**
   * the unique identifier for the SIS import. This field is only included if the user has permission to manage SIS information.
   *
   * type: integer
   */
  sis_import_id: number | string;
  /**
   * The name of the term.
   *
   *
   */
  name: string;
  /**
   * The datetime of the start of the term.
   *
   * format: date-time
   */
  start_at: string;
  /**
   * The datetime of the end of the term.
   *
   * format: date-time
   */
  end_at: string;
  /**
   * The state of the term. Can be 'active' or 'deleted'.
   *
   *
   */
  workflow_state: string;
  /**
   * Term date overrides for specific enrollment types
   *
   * object
   */
  overrides: JSONObject;
  /**
   * The number of courses in the term (available via include)
   *
   * type: integer
   */
  course_count: number | string;
};

/**
 *
 */
export type EnrollmentTermsList = {
  /**
   * a paginated list of all terms in the account
   *
   *
   */
  enrollment_terms: EnrollmentTerm[];
};
