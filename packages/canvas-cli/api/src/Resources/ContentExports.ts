import { File } from './Files.js';

export type ContentExport = {
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
  /** The type of content migration: 'common_cartridge' or 'qti' */
  export_type: string;
  /**
   * Attachment api object for the export package (not present before the export
   * completes or after it becomes unavailable for download.)
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
  /** Current state of the content migration: created exporting exported failed */
  workflow_state: string;
};
