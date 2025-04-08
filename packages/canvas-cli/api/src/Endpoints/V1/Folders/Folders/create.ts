import { client } from '../../../../Client.js';
import { Folder } from '../../../../Resources/Files.js';

type Parameters = {
  /** The name of the folder */
  name: string;
  /**
   * The id of the folder to store the new folder in. An error will be
   * returned if this does not correspond to an existing folder. If this and
   * parent_folder_path are sent an error will be returned. If neither is
   * given, a default folder will be used.
   */
  parent_folder_id: string;
  /**
   * The path of the folder to store the new folder in. The path separator is
   * the forward slash `/`, never a back slash. The parent folder will be
   * created if it does not already exist. This parameter only applies to new
   * folders in a context that has folders, such as a user, a course, or a
   * group. If this and parent_folder_id are sent an error will be returned.
   * If neither is given, a default folder will be used.
   */
  parent_folder_path: string;
  /**
   * The datetime to lock the folder at
   *
   * Format: date-time
   */
  lock_at: string;
  /**
   * The datetime to unlock the folder at
   *
   * Format: date-time
   */
  unlock_at: string;
  /** Flag the folder as locked */
  locked: boolean;
  /** Flag the folder as hidden */
  hidden: boolean;
  /**
   * Set an explicit sort position for the folder
   *
   * Format: 'int64'
   */
  position: number;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create folder
 *
 * Creates a folder in the specified context
 *
 * Nickname: create_folder_folders
 */
export async function create({ parameters }: Options) {
  return await client().fetchAs<Folder>(`/v1/folders/{folder_id}/folders`, {
    method: 'POST',
    params: parameters
  });
}
