import { JSONObject } from '@battis/typescript-tricks';
import { User } from './Users.js';

export type OutcomeImportData = {
  /** The type of outcome import */
  import_type: string;
};

export type OutcomeImport = {
  /**
   * The unique identifier for the outcome import.
   *
   * Type: integer
   */
  id: number;
  /**
   * The unique identifier for the group into which the outcomes will be
   * imported to, or NULL.
   *
   * Type: integer
   */
  learning_outcome_group_id: number;
  /**
   * The date the outcome import was created.
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * The date the outcome import finished. Returns null if not finished.
   *
   * Format: date-time
   */
  ended_at: string;
  /**
   * The date the outcome import was last updated.
   *
   * Format: date-time
   */
  updated_at: string;
  /**
   * The current state of the outcome import.
   *
   * - 'created': The outcome import has been created.
   * - 'importing': The outcome import is currently processing.
   * - 'succeeded': The outcome import has completed successfully.
   * - 'failed': The outcome import failed.
   */
  workflow_state: string;
  /** See the OutcomeImportData specification above. */
  data: OutcomeImportData;
  /** The progress of the outcome import. */
  progress: string;
  /** The user that initiated the outcome_import. See the Users API for details. */
  user: User;
  /** An array of row number / error message pairs. Returns the first 25 errors. */
  processing_errors: JSONObject[][];
};
