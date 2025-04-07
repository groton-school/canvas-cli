type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get icon metadata
 *
 * Returns the icon maker file attachment metadata
 *
 * Nickname: get_icon_metadata
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/files/{id}/icon_metadata`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
