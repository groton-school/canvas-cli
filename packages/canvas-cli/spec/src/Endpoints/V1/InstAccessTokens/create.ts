import { InstAccessToken } from '../../../Resources/InstAccessTokens.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Create InstAccess token
 *
 * Create a unique, encrypted InstAccess token.
 *
 * Generates a different InstAccess token each time it's called, each one
 * expires after a short window (1 hour).
 *
 * Nickname: create_instaccess_token
 */
export async function create({
  parameters
}: Options): Promise<InstAccessToken> {
  return await (
    await fetch(`/v1/inst_access_tokens`, { method: 'POST', body: parameters })
  ).json();
}
