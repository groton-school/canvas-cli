import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { Folder } from '../../../Resources/Files.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
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
  /**
   * Flag the folder as locked
   *
   * Type: boolean
   */
  locked: boolean | string;
  /**
   * Flag the folder as hidden
   *
   * Type: boolean
   */
  hidden: boolean | string;
  /**
   * Set an explicit sort position for the folder
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  position: number | string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
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
