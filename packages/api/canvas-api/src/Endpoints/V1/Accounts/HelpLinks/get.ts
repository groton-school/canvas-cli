import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { HelpLinks } from '../../../../Resources/Accounts.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type getSearchParameters = Masquerade;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: getSearchParameters;
        strict: true;
      }
  );

/**
 * Get help links
 *
 * Returns the help links for that account
 *
 * Nickname: get_help_links
 */
export async function get(options: Options) {
  const response = await client().fetchAs<HelpLinks>(
    `/api/v1/accounts/{account_id}/help_links`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
