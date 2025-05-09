import { client } from '../../../../Client.js';
import { SSOSettings } from '../../../../Resources/AuthenticationProviders.js';

export type updatePathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Update account auth settings
 *
 * For various cases of mixed SSO configurations, you may need to set some
 * configuration at the account level to handle the particulars of your setup.
 *
 * This endpoint accepts a PUT request to set several possible account settings.
 * All setting are optional on each request, any that are not provided at all
 * are simply retained as is. Any that provide the key but a null-ish value
 * (blank string, null, undefined) will be UN-set.
 *
 * You can list the current state of each setting with "show_sso_settings"
 *
 * Nickname: update_account_auth_settings
 */
export async function update(options: Options) {
  return await client().fetchAs<SSOSettings>(
    `/api/v1/accounts/{account_id}/sso_settings`,
    {
      method: 'PUT',
      ...options
    }
  );
}
