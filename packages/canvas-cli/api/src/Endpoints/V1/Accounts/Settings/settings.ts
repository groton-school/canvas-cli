import { client } from '../../../../Client.js';

export type settingsPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: settingsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Settings
 *
 * Returns a JSON object containing a subset of settings for the specified
 * account. It's possible an empty set will be returned if no settings are
 * applicable. The caller must be an Account admin with the
 * manage_account_settings permission.
 *
 * Nickname: settings
 */
export async function settings(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/settings`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
