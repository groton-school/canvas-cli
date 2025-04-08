import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Query by user.
 *
 * List authentication events for a given user.
 *
 * Nickname: query_by_user
 */
export async function query_by_user({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/audit/authentication/users/{user_id}`,
    { method: 'GET', params: parameters }
  );
}
