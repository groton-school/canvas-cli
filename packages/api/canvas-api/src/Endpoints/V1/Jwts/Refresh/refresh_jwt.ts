import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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
      query?: Partial<refresh_jwtSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<refresh_jwtSearchParameters>;
      body?: Partial<refresh_jwtFormParameters>;
      /** @deprecated Use {@link Options.body} */
      params?: Partial<refresh_jwtFormParameters>;
      strict?: false;
    }
  | ((
      | {
          query: refresh_jwtSearchParameters;
        }
      | {
          /** @deprecated Use {Options.query} */
          searchParams: refresh_jwtSearchParameters;
        }
    ) &
      (
        | {
            body: refresh_jwtFormParameters;
          }
        | {
            /** @deprecated Use {@link Options.body} */
            params: refresh_jwtFormParameters;
          }
      ) & {
        strict: true;
      });

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
