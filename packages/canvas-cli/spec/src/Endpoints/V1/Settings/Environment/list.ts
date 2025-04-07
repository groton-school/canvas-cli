type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List environment settings
 *
 * Return a hash of global settings for the root account This is the same
 * information supplied to the web interface as +ENV.SETTINGS+.
 *
 * Nickname: list_environment_settings
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/settings/environment`, { method: 'GET', body: parameters })
  ).json();
}
