import { SSOSettings } from '../../../../Resources/AuthenticationProviders.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show account auth settings
 *
 * The way to get the current state of each account level setting that's
 * relevant to Single Sign On configuration
 *
 * You can list the current state of each setting with "update_sso_settings"
 *
 * Nickname: show_account_auth_settings
 */
export async function show_account_auth_settings({
  parameters
}: Options): Promise<SSOSettings> {
  return await (
    await fetch(`/v1/accounts/{account_id}/sso_settings`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
