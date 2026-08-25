import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { ContextExternalTool } from '../../../../Resources/ExternalTools.js';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  external_tool_id: string | number;
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get a single external tool
 *
 * Returns the specified external tool.
 *
 * nickname: get_single_external_tool_accounts
 *
 *
 *
 *
 */
export async function get(options: Options) {
  const response = await client().fetchAs<ContextExternalTool>(
    `/api/v1/accounts/{account_id}/external_tools/{external_tool_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
