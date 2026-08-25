import { JSONValue } from '@battis/typescript-tricks';
import { File } from './Files.js';

/**
 * Combination of a Course & EpubExport.
 */
export type CourseEpubExport = {
  /**
   * the unique identifier for the course
   *
   * type: integer
   */
  id: number | string;
  /**
   * the name for the course
   *
   *
   */
  name: string;
  /**
   * ePub export API object
   *
   *
   */
  epub_export: EpubExport;
};

/**
 *
 */
export type EpubExport = {
  /**
   * the unique identifier for the export
   *
   * type: integer
   */
  id: number | string;
  /**
   * the date and time this export was requested
   *
   * format: date-time
   */
  created_at: string;
  /**
   * attachment api object for the export ePub (not present until the export completes)
   *
   *
   */
  attachment: File;
  /**
   * The api endpoint for polling the current progress
   *
   *
   */
  progress_url: string;
  /**
   * The ID of the user who started the export
   *
   * type: integer
   */
  user_id: number | string;
  /**
   * Current state of the ePub export: created exporting exported generating generated failed
   *
   *
   */
  workflow_state: string;
};
