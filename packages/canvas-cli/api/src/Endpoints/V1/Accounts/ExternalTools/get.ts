import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  external_tool_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get a single external tool
 *
 * Returns the specified external tool.
 *
 * Nickname: get_single_external_tool_accounts
 */
export async function get(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/external_tools/{external_tool_id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
