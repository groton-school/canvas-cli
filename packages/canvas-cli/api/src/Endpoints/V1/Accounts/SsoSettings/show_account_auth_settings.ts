import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { SSOSettings } from '../../../../Resources/AuthenticationProviders.js';

export type show_account_auth_settingsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type show_account_auth_settingsSearchParameters = Masquerade;

type Options = {
  pathParams: show_account_auth_settingsPathParameters;
} & (
  | {
      searchParams?: Partial<show_account_auth_settingsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_account_auth_settingsSearchParameters;
      strict: true;
    }
);

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
export async function show_account_auth_settings(options: Options) {
  const response = await client().fetchAs<SSOSettings>(
    `/api/v1/accounts/{account_id}/sso_settings`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
