type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get Kaltura config
 *
 * Return the config information for the Kaltura plugin in json format.
 *
 * Nickname: get_kaltura_config
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/services/kaltura`, { method: 'GET', body: parameters })
  ).json();
}
