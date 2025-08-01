import { File } from './Files.js';

export type Report = {
  /**
   * The unique identifier for the report.
   *
   * Type: integer
   */
  id: number | string;
  /** The type of report. */
  report: string;
  /** The url to the report download. */
  file_url: string;
  /**
   * The attachment api object of the report. Only available after the report
   * has completed.
   */
  attachment: File;
  /** The status of the report */
  status: string;
  /**
   * The date and time the report was created.
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * The date and time the report started processing.
   *
   * Format: date-time
   */
  started_at: string;
  /**
   * The date and time the report finished processing.
   *
   * Format: date-time
   */
  ended_at: string;
  /** The report parameters */
  parameters: ReportParameters;
  /**
   * The progress of the report
   *
   * Type: integer
   */
  progress: number | string;
  /**
   * This is the current line count being written to the report. It updates
   * every 1000 records.
   *
   * Type: integer
   */
  current_line: number | string;
};

/** The parameters returned will vary for each report. */
export type ReportParameters = {
  /**
   * The canvas id of the term to get grades from
   *
   * Type: integer
   */
  enrollment_term_id: number | string;
  /**
   * If true, deleted objects will be included. If false, deleted objects will
   * be omitted.
   *
   * Type: boolean
   */
  include_deleted: boolean | string;
  /**
   * The id of the course to report on
   *
   * Type: integer
   */
  course_id: number | string;
  /** The sort order for the csv, Options: 'users', 'courses', 'outcomes'. */
  order: string;
  /**
   * If true, user data will be included. If false, user data will be omitted.
   *
   * Type: boolean
   */
  users: boolean | string;
  /**
   * If true, account data will be included. If false, account data will be
   * omitted.
   *
   * Type: boolean
   */
  accounts: boolean | string;
  /**
   * If true, term data will be included. If false, term data will be omitted.
   *
   * Type: boolean
   */
  terms: boolean | string;
  /**
   * If true, course data will be included. If false, course data will be
   * omitted.
   *
   * Type: boolean
   */
  courses: boolean | string;
  /**
   * If true, section data will be included. If false, section data will be
   * omitted.
   *
   * Type: boolean
   */
  sections: boolean | string;
  /**
   * If true, enrollment data will be included. If false, enrollment data will
   * be omitted.
   *
   * Type: boolean
   */
  enrollments: boolean | string;
  /**
   * If true, group data will be included. If false, group data will be omitted.
   *
   * Type: boolean
   */
  groups: boolean | string;
  /**
   * If true, data for crosslisted courses will be included. If false, data for
   * crosslisted courses will be omitted.
   *
   * Type: boolean
   */
  xlist: boolean | string;
  /** Type: integer */
  sis_terms_csv: number | string;
  /** Type: integer */
  sis_accounts_csv: number | string;
  /**
   * If true, enrollment state will be included. If false, enrollment state will
   * be omitted. Defaults to false.
   *
   * Type: boolean
   */
  include_enrollment_state: boolean | string;
  /**
   * Include enrollment state. Defaults to 'all' Options: ['active'| 'invited'|
   * 'creation_pending'| 'deleted'| 'rejected'| 'completed'| 'inactive'| 'all']
   */
  enrollment_state: string[];
  /**
   * The beginning date for submissions. Max time range is 2 weeks.
   *
   * Format: date-time
   */
  start_at: string;
  /**
   * The end date for submissions. Max time range is 2 weeks.
   *
   * Format: date-time
   */
  end_at: string;
};
