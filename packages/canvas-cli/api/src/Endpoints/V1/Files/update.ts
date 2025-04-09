import { client } from '../../../Client.js';
import { File } from '../../../Resources/Files.js';

type updatePathParameters = {
  /** ID */
  id: string;
};

type updateFormParameters = {
  /** The new display name of the file, with a limit of 255 characters. */
  name: string;
  /**
   * The id of the folder to move this file into. The new folder must be in
   * the same context as the original parent folder. If the file is in a
   * context without folders this does not apply.
   */
  parent_folder_id: string;
  /**
   * If the file is moved to a folder containing a file with the same name, or
   * renamed to a name matching an existing file, the API call will fail
   * unless this parameter is supplied.
   *
   * "overwrite":: Replace the existing file with the same name "rename":: Add
   * a qualifier to make the new filename unique
   */
  on_duplicate: string;
  /**
   * The datetime to lock the file at
   *
   * Format: date-time
   */
  lock_at: string;
  /**
   * The datetime to unlock the file at
   *
   * Format: date-time
   */
  unlock_at: string;
  /** Flag the file as locked */
  locked: boolean;
  /** Flag the file as hidden */
  hidden: boolean;
  /** Configure which roles can access this file */
  visibility_level: string;
};

type Options = {
  pathParams: updatePathParameters;
  params?: updateFormParameters;
};

/**
 * Update file
 *
 * Update some settings on the specified file
 *
 * Nickname: update_file
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<File>(`/v1/files/{id}`, {
    method: 'PUT',
    pathParams,
    params
  });
}
