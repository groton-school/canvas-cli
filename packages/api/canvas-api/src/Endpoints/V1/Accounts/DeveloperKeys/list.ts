import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { DeveloperKey } from '../../../../Resources/DeveloperKeys.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Defaults to false. If true, lists keys inherited from Site Admin (and
     * consortium parent account, if applicable).
     *
     * Type: boolean
     */
    inherited: boolean | string;
  }>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List Developer Keys
 *
 * List all developer keys created in the current account.
 *
 * Nickname: list_developer_keys
 */
export async function list(options: Options) {
  const response = await client().fetchAs<DeveloperKey[]>(
    `/api/v1/accounts/{account_id}/developer_keys`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
