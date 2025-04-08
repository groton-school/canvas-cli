import { client } from '../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete folder
 *
 * Remove the specified folder. You can only delete empty folders unless you set
 * the 'force' flag
 *
 * Nickname: delete_folder
 */
export async function delete_folder({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/folders/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
