import { client } from '../../../../Client.js';

export type delete_external_tool_accountsPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  external_tool_id: string;
};

type Options = {
  pathParams: delete_external_tool_accountsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
