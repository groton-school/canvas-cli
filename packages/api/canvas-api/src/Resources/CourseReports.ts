import { JSONValue } from '@battis/typescript-tricks';
import { File } from './Files.js';

export type Report = {
  /**
   * The unique identifier for the report.
   *
   * Type: integer
   */
  id: number | string;
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
};

/** The parameters returned will vary for each report. */
export type ReportParameters = {};
