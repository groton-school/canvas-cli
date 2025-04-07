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
export async function delete_folder({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/folders/{id}`, { method: 'DELETE', body: parameters })
  ).json();
}
