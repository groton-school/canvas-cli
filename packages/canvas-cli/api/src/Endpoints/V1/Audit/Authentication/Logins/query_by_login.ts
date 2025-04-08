import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Query by login.
 *
 * List authentication events for a given login.
 *
 * Nickname: query_by_login
 */
export async function query_by_login({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/audit/authentication/logins/{login_id}`,
    { method: 'GET', params: parameters }
  );
}
