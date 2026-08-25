import { JSONValue } from '@battis/typescript-tricks';
import { LockInfo } from './Assignments.js';

/**
 *
 */
export type File = {
  /**
   *
   *
   * type: integer
   */
  id: number | string;
  /**
   *
   *
   * type: integer
   */
  folder_id: number | string;
  /**
   *
   *
   *
   */
  display_name: string;
  /**
   *
   *
   *
   */
  filename: string;
  /**
   *
   *
   *
   */
  'content-type': string;
  /**
   *
   *
   *
   */
  url: string;
  /**
   * file size in bytes
   *
   * type: integer
   */
  size: number | string;
  /**
   *
   *
   * format: date-time
   */
  created_at: string;
  /**
   *
   *
   * format: date-time
   */
  updated_at: string;
  /**
   *
   *
   * format: date-time
   */
  unlock_at: string;
  /**
   *
   *
   * type: boolean
   */
  locked: boolean | string;
  /**
   *
   *
   * type: boolean
   */
  hidden: boolean | string;
  /**
   *
   *
   * format: date-time
   */
  lock_at: string;
  /**
   *
   *
   * type: boolean
   */
  hidden_for_user: boolean | string;
  /**
   * Changes who can access the file. Valid options are 'inherit' (the default), 'course', 'institution', and 'public'. Only valid in course endpoints.
   *
   *
   */
  visibility_level: string;
  /**
   *
   *
   *
   */
  thumbnail_url: string;
  /**
   *
   *
   * format: date-time
   */
  modified_at: string;
  /**
   * simplified content-type mapping
   *
   *
   */
  mime_class: string;
  /**
   * identifier for file in third-party transcoding service
   *
   *
   */
  media_entry_id: string;
  /**
   *
   *
   * type: boolean
   */
  locked_for_user: boolean | string;
  /**
   *
   *
   *
   */
  lock_info: LockInfo;
  /**
   *
   *
   *
   */
  lock_explanation: string;
  /**
   * optional: url to the document preview. This url is specific to the user making the api call. Only included in submission endpoints.
   *
   *
   */
  preview_url: string;
};

/**
 *
 */
export type Folder = {
  /**
   *
   *
   *
   */
  context_type: string;
  /**
   *
   *
   * type: integer
   */
  context_id: number | string;
  /**
   *
   *
   * type: integer
   */
  files_count: number | string;
  /**
   *
   *
   * type: integer
   */
  position: number | string;
  /**
   *
   *
   * format: date-time
   */
  updated_at: string;
  /**
   *
   *
   *
   */
  folders_url: string;
  /**
   *
   *
   *
   */
  files_url: string;
  /**
   *
   *
   *
   */
  full_name: string;
  /**
   *
   *
   * format: date-time
   */
  lock_at: string;
  /**
   *
   *
   * type: integer
   */
  id: number | string;
  /**
   *
   *
   * type: integer
   */
  folders_count: number | string;
  /**
   *
   *
   *
   */
  name: string;
  /**
   *
   *
   * type: integer
   */
  parent_folder_id: number | string;
  /**
   *
   *
   * format: date-time
   */
  created_at: string;
  /**
   *
   *
   * format: date-time
   */
  unlock_at: string;
  /**
   *
   *
   * type: boolean
   */
  hidden: boolean | string;
  /**
   *
   *
   * type: boolean
   */
  hidden_for_user: boolean | string;
  /**
   *
   *
   * type: boolean
   */
  locked: boolean | string;
  /**
   *
   *
   * type: boolean
   */
  locked_for_user: boolean | string;
  /**
   * If true, indicates this is a read-only folder containing files submitted to assignments
   *
   * type: boolean
   */
  for_submissions: boolean | string;
};

/**
 * Describes the copyright and license information for a File
 */
export type UsageRights = {
  /**
   * Copyright line for the file
   *
   *
   */
  legal_copyright: string;
  /**
   * Justification for using the file in a Canvas course. Valid values are 'own_copyright', 'public_domain', 'used_by_permission', 'fair_use', 'creative_commons'
   *
   *
   */
  use_justification: string;
  /**
   * License identifier for the file.
   *
   *
   */
  license: string;
  /**
   * Readable license name
   *
   *
   */
  license_name: string;
  /**
   * Explanation of the action performed
   *
   *
   */
  message: string;
  /**
   * List of ids of files that were updated
   *
   *
   */
  file_ids: number | string[];
};

/**
 *
 */
export type License = {
  /**
   * a short string identifying the license
   *
   *
   */
  id: string;
  /**
   * the name of the license
   *
   *
   */
  name: string;
  /**
   * a link to the license text
   *
   *
   */
  url: string;
};
