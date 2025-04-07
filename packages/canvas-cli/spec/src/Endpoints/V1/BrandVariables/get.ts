type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get the brand config variables that should be used for this domain
 *
 * Will redirect to a static json file that has all of the brand variables used
 * by this account. Even though this is a redirect, do not store the redirected
 * url since if the account makes any changes it will redirect to a new url.
 * Needs no authentication.
 *
 * Nickname: get_brand_config_variables_that_should_be_used_for_this_domain
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/brand_variables`, { method: 'GET', body: parameters })
  ).json();
}
