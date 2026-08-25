import { JSONValue } from '@battis/typescript-tricks';
import { File } from './Files.js';

/**
 *
 */
export type ContentExport = {
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
   * the type of content migration: 'common_cartridge' or 'qti'
   *
   *
   */
  export_type: string;
  /**
   * attachment api object for the export package (not present before the export completes or after it becomes unavailable for download.)
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
   * Current state of the content migration: created exporting exported failed
   *
   *
   */
  workflow_state: string;
};
