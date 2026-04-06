import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade &
  Partial<{
    /**
     * Array of additional information to include.
     *
     * "description_html":: an HTML description of the report, with example
     * output "parameters_html":: an HTML form for the report parameters
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
 * Nickname: list_available_reports
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
