import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ContextExternalTool } from '../../../../Resources/ExternalTools.js';

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

type Options = (
  | {
      path: delete_external_tool_accountsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_external_tool_accountsPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_external_tool_accountsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_external_tool_accountsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_external_tool_accountsSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: delete_external_tool_accountsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete an external tool
 *
 * Remove the specified external tool
 *
 * Nickname: delete_external_tool_accounts
 */
export async function delete_external_tool_accounts(options: Options) {
  const response = await client().fetchAs<ContextExternalTool>(
    `/api/v1/accounts/{account_id}/external_tools/{external_tool_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
