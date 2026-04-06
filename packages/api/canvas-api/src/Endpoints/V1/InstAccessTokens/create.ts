import { client, Masquerade } from '#client';
import { InstAccessToken } from '../../../Resources/InstAccessTokens.js';

export type createSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<createSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<createSearchParameters>;
      strict?: false;
    }
  | {
      query?: Partial<createSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams: createSearchParameters;
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
  const response = await client().fetchAs<InstAccessToken>(
    `/api/v1/inst_access_tokens`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
