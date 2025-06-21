import { LockInfo } from './Assignments.js';

export type File = {
  /** Type: integer */
  id: number | string;
  uuid: string;
  /** Type: integer */
  folder_id: number | string;
  display_name: string;
  filename: string;
  'content-type': string;
  url: string;
  /**
   * File size in bytes
   *
   * Type: integer
   */
  size: number | string;
  /** Format: date-time */
  created_at: string;
  /** Format: date-time */
  updated_at: string;
  /** Format: date-time */
  unlock_at: string;
  /** Type: boolean */
  locked: boolean | string;
  /** Type: boolean */
  hidden: boolean | string;
  /** Format: date-time */
  lock_at: string;
  /** Type: boolean */
  hidden_for_user: boolean | string;
  /**
   * Changes who can access the file. Valid options are 'inherit' (the default),
   * 'course', 'institution', and 'public'. Only valid in course endpoints.
   */
  visibility_level: string;
  thumbnail_url: string;
  /** Format: date-time */
  modified_at: string;
  /** Simplified content-type mapping */
  mime_class: string;
  /** Identifier for file in third-party transcoding service */
  media_entry_id: string;
  /** Type: boolean */
  locked_for_user: boolean | string;
  lock_info: LockInfo;
  lock_explanation: string;
  /**
   * Optional: url to the document preview. This url is specific to the user
   * making the api call. Only included in submission endpoints.
   */
  preview_url: string;
};

export type Folder = {
  context_type: string;
  /** Type: integer */
  context_id: number | string;
  /** Type: integer */
  files_count: number | string;
  /** Type: integer */
  position: number | string;
  /** Format: date-time */
  updated_at: string;
  folders_url: string;
  files_url: string;
  full_name: string;
  /** Format: date-time */
  lock_at: string;
  /** Type: integer */
  id: number | string;
  /** Type: integer */
  folders_count: number | string;
  name: string;
  /** Type: integer */
  parent_folder_id: number | string;
  /** Format: date-time */
  created_at: string;
  /** Format: date-time */
  unlock_at: string;
  /** Type: boolean */
  hidden: boolean | string;
  /** Type: boolean */
  hidden_for_user: boolean | string;
  /** Type: boolean */
  locked: boolean | string;
  /** Type: boolean */
  locked_for_user: boolean | string;
  /**
   * If true, indicates this is a read-only folder containing files submitted to
   * assignments
   *
   * Type: boolean
   */
  for_submissions: boolean | string;
};

/** Describes the copyright and license information for a File */
export type UsageRights = {
  /** Copyright line for the file */
  legal_copyright: string;
  /**
   * Justification for using the file in a Canvas course. Valid values are
   * 'own_copyright', 'public_domain', 'used_by_permission', 'fair_use',
   * 'creative_commons'
   */
  use_justification: string;
  /** License identifier for the file. */
  license: string;
  /** Readable license name */
  license_name: string;
  /** Explanation of the action performed */
  message: string;
  /** List of ids of files that were updated */
  file_ids: number | string[];
};

export type License = {
  /** A short string identifying the license */
  id: string;
  /** The name of the license */
  name: string;
  /** A link to the license text */
  url: string;
};
