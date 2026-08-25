import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { OutcomeImport } from '../../../../Resources/OutcomeImports.js';

export type import_outcomes_accountsPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
};

export type import_outcomes_accountsSearchParameters = Masquerade;

export type import_outcomes_accountsFormParameters = Masquerade & {
  /**
     * Choose the data format for reading outcome data. With a standard Canvas
install, this option can only be &#x27;instructure_csv&#x27;, and if unprovided,
will be assumed to be so. Can be part of the query string.
     *
     * 
     *
     * 
     */
  import_type: string;
  /**
     * There are two ways to post outcome import data - either via a
multipart/form-data form-field-style attachment, or via a non-multipart
raw post request.

&#x27;attachment&#x27; is required for multipart/form-data style posts. Assumed to
be outcome data from a file upload form field named &#x27;attachment&#x27;.

Examples:
  curl -F attachment&#x3D;@&lt;filename&gt; -H &quot;Authorization: Bearer &lt;token&gt;&quot; \
      &#x27;https://&lt;canvas&gt;/api/v1/accounts/&lt;account_id&gt;/outcome_imports?import_type&#x3D;instructure_csv&#x27;
  curl -F attachment&#x3D;@&lt;filename&gt; -H &quot;Authorization: Bearer &lt;token&gt;&quot; \
      &#x27;https://&lt;canvas&gt;/api/v1/courses/&lt;course_id&gt;/outcome_imports?import_type&#x3D;instructure_csv&#x27;

If you decide to do a raw post, you can skip the &#x27;attachment&#x27; argument,
but you will then be required to provide a suitable Content-Type header.
You are encouraged to also provide the &#x27;extension&#x27; argument.

Examples:
  curl -H &#x27;Content-Type: text/csv&#x27; --data-binary @&lt;filename&gt;.csv \
      -H &quot;Authorization: Bearer &lt;token&gt;&quot; \
      &#x27;https://&lt;canvas&gt;/api/v1/accounts/&lt;account_id&gt;/outcome_imports?import_type&#x3D;instructure_csv&#x27;

  curl -H &#x27;Content-Type: text/csv&#x27; --data-binary @&lt;filename&gt;.csv \
      -H &quot;Authorization: Bearer &lt;token&gt;&quot; \
      &#x27;https://&lt;canvas&gt;/api/v1/courses/&lt;course_id&gt;/outcome_imports?import_type&#x3D;instructure_csv&#x27;
     *
     * 
     *
     * 
     */
  attachment: string;
  /**
     * Recommended for raw post request style imports. This field will be used to
distinguish between csv and other file format extensions that
would usually be provided with the filename in the multipart post request
scenario. If not provided, this value will be inferred from the
Content-Type, falling back to csv-file format if all else fails.
     *
     * 
     *
     * 
     */
  extension: string;
};

type Options = (
  | {
      path: import_outcomes_accountsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: import_outcomes_accountsPathParameters;
    }
) &
  (
    | {
        query?: Partial<import_outcomes_accountsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<import_outcomes_accountsSearchParameters>;
        body?: Partial<import_outcomes_accountsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<import_outcomes_accountsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: import_outcomes_accountsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: import_outcomes_accountsSearchParameters;
          }
      ) &
        (
          | {
              body: import_outcomes_accountsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: import_outcomes_accountsFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Import Outcomes
 *
 * Import outcomes into Canvas.

For more information on the format that's expected here, please see the
"Outcomes CSV" section in the API docs.
 *
 * nickname: import_outcomes_accounts
 *
 * 
 *
 * 
 */
export async function import_outcomes_accounts(options: Options) {
  const response = await client().fetchAs<OutcomeImport>(
    `/api/v1/accounts/{account_id}/outcome_imports`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
