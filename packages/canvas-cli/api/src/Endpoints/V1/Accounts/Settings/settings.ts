import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

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
export async function settings({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/accounts/{account_id}/settings`, {
    method: 'GET',
    params: parameters
  });
}
