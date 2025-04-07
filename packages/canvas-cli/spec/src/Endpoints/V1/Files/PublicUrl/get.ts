type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get public inline preview url
 *
 * Determine the URL that should be used for inline preview of the file.
 *
 * Nickname: get_public_inline_preview_url
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/files/{id}/public_url`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
