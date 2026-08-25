import { JSONValue } from '@battis/typescript-tricks';
import { File } from './Files.js';
import { User } from './Users.js';

/**
 *
 */
export type Report = {
  /**
   * The unique identifier for the report.
   *
   * type: integer
   */
  id: number | string;
  /**
   * The type of report.
   *
   *
   */
  report: string;
  /**
   * The url to the report download.
   *
   *
   */
  file_url: string;
  /**
   * The attachment api object of the report. Only available after the report has completed.
   *
   *
   */
  attachment: File;
  /**
   * The status of the report
   *
   *
   */
  status: string;
  /**
   * The date and time the report was created.
   *
   * format: date-time
   */
  created_at: string;
  /**
   * The date and time the report started processing.
   *
   * format: date-time
   */
  started_at: string;
  /**
   * The date and time the report finished processing.
   *
   * format: date-time
   */
  ended_at: string;
  /**
   * The time (in seconds) the report has been waiting to run, has been running so far, or took to run to completion, depending on its current state.
   *
   * type: number
   */
  run_time: number | string;
  /**
   * The report parameters
   *
   *
   */
  parameters: ReportParameters;
  /**
   * The progress of the report
   *
   * type: integer
   */
  progress: number | string;
  /**
   * This is the current line count being written to the report. It updates every 1000 records.
   *
   * type: integer
   */
  current_line: number | string;
  /**
   * The user that initiated the account report. See the Users API for details.
   *
   *
   */
  user: User;
};

/**
 * The parameters returned will vary for each report.
 */
export type ReportParameters = {
  /**
   * The canvas id of the term to get grades from
   *
   * type: integer
   */
  enrollment_term_id: number | string;
  /**
   * If true, deleted objects will be included. If false, deleted objects will be omitted.
   *
   * type: boolean
   */
  include_deleted: boolean | string;
  /**
   * The id of the course to report on
   *
   * type: integer
   */
  course_id: number | string;
  /**
   * The sort order for the csv, Options: 'users', 'courses', 'outcomes'.
   *
   *
   */
  order: string;
  /**
   * If true, user data will be included. If false, user data will be omitted.
   *
   * type: boolean
   */
  users: boolean | string;
  /**
   * If true, account data will be included. If false, account data will be omitted.
   *
   * type: boolean
   */
  accounts: boolean | string;
  /**
   * If true, term data will be included. If false, term data will be omitted.
   *
   * type: boolean
   */
  terms: boolean | string;
  /**
   * If true, course data will be included. If false, course data will be omitted.
   *
   * type: boolean
   */
  courses: boolean | string;
  /**
   * If true, section data will be included. If false, section data will be omitted.
   *
   * type: boolean
   */
  sections: boolean | string;
  /**
   * If true, enrollment data will be included. If false, enrollment data will be omitted.
   *
   * type: boolean
   */
  enrollments: boolean | string;
  /**
   * If true, group data will be included. If false, group data will be omitted.
   *
   * type: boolean
   */
  groups: boolean | string;
  /**
   * If true, data for crosslisted courses will be included. If false, data for crosslisted courses will be omitted.
   *
   * type: boolean
   */
  xlist: boolean | string;
  /**
   *
   *
   * type: integer
   */
  sis_terms_csv: number | string;
  /**
   *
   *
   * type: integer
   */
  sis_accounts_csv: number | string;
  /**
   * If true, enrollment state will be included. If false, enrollment state will be omitted. Defaults to false.
   *
   * type: boolean
   */
  include_enrollment_state: boolean | string;
  /**
   * Include enrollment state. Defaults to 'all' Options: ['active'| 'invited'| 'creation_pending'| 'deleted'| 'rejected'| 'completed'| 'inactive'| 'all']
   *
   *
   */
  enrollment_state: string[];
  /**
   * The beginning date for submissions. Max time range is 2 weeks.
   *
   * format: date-time
   */
  start_at: string;
  /**
   * The end date for submissions. Max time range is 2 weeks.
   *
   * format: date-time
   */
  end_at: string;
};
