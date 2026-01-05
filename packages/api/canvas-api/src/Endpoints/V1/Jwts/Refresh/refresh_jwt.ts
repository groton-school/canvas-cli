import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { JWT } from '../../../../Resources/JwTs.js';

export type refresh_jwtSearchParameters = Masquerade;

export type refresh_jwtFormParameters = Masquerade & {
  /**
   * An existing JWT token to be refreshed. The new token will have the same
   * context and workflows as the existing token.
   */
  jwt: string;
};

type Options =
  | {
      searchParams?: Partial<refresh_jwtSearchParameters>;
      params?: Partial<refresh_jwtFormParameters>;
      strict?: false;
    }
  | {
      searchParams: refresh_jwtSearchParameters;
      params: refresh_jwtFormParameters;
      strict: true;
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
export async function refresh_jwt(options: Options) {
  const response = await client().fetchAs<JWT>(`/api/v1/jwts/refresh`, {
    method: 'POST',
    ...options
  });
  return response;
}
