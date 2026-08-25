import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade &
  Partial<{
    /**
     * Array of additional information to include.

&quot;description_html&quot;:: an HTML description of the report, with example output
&quot;parameters_html&quot;:: an HTML form for the report parameters
     *
     * 
     *
     * 
     */
    include: string[];
  }>;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List Available Reports
 *
 * Returns a paginated list of reports for the current context.
 *
 * nickname: list_available_reports
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/reports`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
