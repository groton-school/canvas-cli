import { client } from '../../../../Client.js';

type edit_external_tool_accountsPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  external_tool_id: string;
};

type Options = {
  pathParams: edit_external_tool_accountsPathParameters;
};

/**
 * Edit an external tool
 *
 * Update the specified external tool. Uses same parameters as create
 *
 * Nickname: edit_external_tool_accounts
 */
export async function edit_external_tool_accounts({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/external_tools/{external_tool_id}`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
