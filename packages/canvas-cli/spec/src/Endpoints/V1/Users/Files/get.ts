import { File } from '../../../../Resources/Files.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get file
 *
 * Returns the standard attachment json object
 *
 * Nickname: get_file_users
 */
export async function get({ parameters }: Options): Promise<File> {
  return await (
    await fetch(`/v1/users/{user_id}/files/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
