import { client } from '../../../Client.js';
import { Folder } from '../../../Resources/Files.js';

export type updatePathParameters = {
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /** The new name of the folder */
  name: string;
  /**
   * The id of the folder to move this folder into. The new folder must be in
   * the same context as the original parent folder.
   */
  parent_folder_id: string;
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
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update folder
 *
 * Updates a folder
 *
 * Nickname: update_folder
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Folder>(`/api/v1/folders/{id}`, {
    method: 'PUT',
    ...options
  });
  return response;
}
