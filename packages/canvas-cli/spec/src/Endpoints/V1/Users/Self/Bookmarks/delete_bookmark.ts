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
export async function delete_bookmark({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/self/bookmarks/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
