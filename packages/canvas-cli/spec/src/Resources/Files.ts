import { LockInfo } from './Assignments.js';

export type File = {
  /** Type: integer */
  id: number;
  uuid: string;
  /** Type: integer */
  folder_id: number;
  display_name: string;
  filename: string;
  'content-type': string;
  url: string;
  /**
   * File size in bytes
   *
   * Type: integer
   */
  size: number;
  /** Format: 'date-time' */
  created_at: string;
  /** Format: 'date-time' */
  updated_at: string;
  /** Format: 'date-time' */
  unlock_at: string;
  locked: boolean;
  hidden: boolean;
  /** Format: 'date-time' */
  lock_at: string;
  hidden_for_user: boolean;
  /**
   * Changes who can access the file. Valid options are 'inherit' (the default),
   * 'course', 'institution', and 'public'. Only valid in course endpoints.
   */
  visibility_level: string;
  thumbnail_url: string;
  /** Format: 'date-time' */
  modified_at: string;
  /** Simplified content-type mapping */
  mime_class: string;
  /** Identifier for file in third-party transcoding service */
  media_entry_id: string;
  locked_for_user: boolean;
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
  context_id: number;
  /** Type: integer */
  files_count: number;
  /** Type: integer */
  position: number;
  /** Format: 'date-time' */
  updated_at: string;
  folders_url: string;
  files_url: string;
  full_name: string;
  /** Format: 'date-time' */
  lock_at: string;
  /** Type: integer */
  id: number;
  /** Type: integer */
  folders_count: number;
  name: string;
  /** Type: integer */
  parent_folder_id: number;
  /** Format: 'date-time' */
  created_at: string;
  /** Format: 'date-time' */
  unlock_at: string;
  hidden: boolean;
  hidden_for_user: boolean;
  locked: boolean;
  locked_for_user: boolean;
  /**
   * If true, indicates this is a read-only folder containing files submitted to
   * assignments
   */
  for_submissions: boolean;
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
  file_ids: string[];
};

export type License = {
  /** A short string identifying the license */
  id: string;
  /** The name of the license */
  name: string;
  /** A link to the license text */
  url: string;
};
