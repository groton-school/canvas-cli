import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type delete_external_tool_accountsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  external_tool_id: string | number;
};

export type delete_external_tool_accountsSearchParameters = Masquerade;

type Options = {
  pathParams: delete_external_tool_accountsPathParameters;
} & (
  | {
      searchParams?: Partial<delete_external_tool_accountsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_external_tool_accountsSearchParameters;
      strict: true;
    }
);

/**
 * Delete an external tool
 *
 * Remove the specified external tool
 *
 * Nickname: delete_external_tool_accounts
 */
export async function delete_external_tool_accounts(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/external_tools/{external_tool_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
