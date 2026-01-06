import { JSONValue } from '@battis/typescript-tricks';
import { File } from './Files.js';

/** Combination of a Course & EpubExport. */
export type CourseEpubExport = {
  /**
   * The unique identifier for the course
   *
   * Type: integer
   */
  id: number | string;
  /** The name for the course */
  name: string;
  /** EPub export API object */
  epub_export: EpubExport;
};

export type EpubExport = {
  /**
   * The unique identifier for the export
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The date and time this export was requested
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * Attachment api object for the export ePub (not present until the export
   * completes)
   */
  attachment: File;
  /** The api endpoint for polling the current progress */
  progress_url: string;
  /**
   * The ID of the user who started the export
   *
   * Type: integer
   */
  user_id: number | string;
  /**
   * Current state of the ePub export: created exporting exported generating
   * generated failed
   */
  workflow_state: string;
};
