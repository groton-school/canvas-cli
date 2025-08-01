import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
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

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
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
