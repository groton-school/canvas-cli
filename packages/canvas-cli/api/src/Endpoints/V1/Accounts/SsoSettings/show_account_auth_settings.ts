import { client } from '../../../../Client.js';
import { SSOSettings } from '../../../../Resources/AuthenticationProviders.js';

export type show_account_auth_settingsPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: show_account_auth_settingsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function show_account_auth_settings({ pathParams }: Options) {
  return await client().fetchAs<SSOSettings>(
    `/v1/accounts/{account_id}/sso_settings`,
    {
      method: 'GET',
      pathParams
    }
  );
}
