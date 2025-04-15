import { client } from '../../../Client.js';
import { InstAccessToken } from '../../../Resources/InstAccessTokens.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
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
export async function create(options: Options) {
  return await client().fetchAs<InstAccessToken>(`/api/v1/inst_access_tokens`, {
    method: 'POST',
    ...options
  });
}
