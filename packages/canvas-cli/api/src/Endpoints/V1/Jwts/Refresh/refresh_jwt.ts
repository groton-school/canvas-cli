import { client } from '../../../../Client.js';
import { JWT } from '../../../../Resources/JwTs.js';

type Parameters = {
  /**
   * An existing JWT token to be refreshed. The new token will have the same
   * context and workflows as the existing token.
   */
  jwt: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Refresh JWT
 *
 * Refresh a JWT for use with other canvas services
 *
 * Generates a different JWT each time it's called, each one expires after a
 * short window (1 hour).
 *
 * Nickname: refresh_jwt
 */
export async function refresh_jwt({ parameters }: Options) {
  return await client().fetchAs<JWT>(`/v1/jwts/refresh`, {
    method: 'POST',
    params: parameters
  });
}
