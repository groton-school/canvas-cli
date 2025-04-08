import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete bookmark
 *
 * Deletes a bookmark
 *
 * Nickname: delete_bookmark
 */
export async function delete_bookmark({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/users/self/bookmarks/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
