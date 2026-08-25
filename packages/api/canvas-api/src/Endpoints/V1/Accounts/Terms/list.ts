import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { EnrollmentTermsList } from '../../../../Resources/EnrollmentTerms.js';

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
     * If set, only returns terms that are in the given state.
Defaults to &#x27;active&#x27;.
     *
     * 
     *
     * 
     */
    workflow_state: string[];
    /**
     * Array of additional information to include.

&quot;overrides&quot;:: term start/end dates overridden for different enrollment types
&quot;course_count&quot;:: the number of courses in each term
     *
     * 
     *
     * 
     */
    include: string[];
    /**
     * If set, only returns terms that match the given search keyword.
Search keyword is matched against term name.
     *
     * 
     *
     * 
     */
    term_name: string;
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
 * List enrollment terms
 *
 * An object with a paginated list of all of the terms in the account.
 *
 * nickname: list_enrollment_terms
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<EnrollmentTermsList>(
    `/api/v1/accounts/{account_id}/terms`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
