import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';

export type delete_folderPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_folderSearchParameters = Masquerade &
  Partial<{
    /**
     * Set to 'true' to allow deleting a non-empty folder
     *
     * Type: boolean
     */
    force: boolean | string;
  }>;

type Options = {
  pathParams: delete_folderPathParameters;
} & (
  | {
      searchParams?: Partial<delete_folderSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_folderSearchParameters;
      strict: true;
    }
);

/**
 * Delete folder
 *
 * Remove the specified folder. You can only delete empty folders unless you set
 * the 'force' flag
 *
 * Nickname: delete_folder
 */
export async function delete_folder(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/folders/{id}`, {
    method: 'DELETE',
    ...options
  });
  return response;
}
