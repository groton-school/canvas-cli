import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { EnrollmentTerm } from '../../../../Resources/EnrollmentTerms.js';

export type retrieve_enrollment_termPathParameters = {
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
  id: string | number;
};

export type retrieve_enrollment_termSearchParameters = Masquerade;

type Options = (
  | {
      path: retrieve_enrollment_termPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: retrieve_enrollment_termPathParameters;
    }
) &
  (
    | {
        query?: Partial<retrieve_enrollment_termSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<retrieve_enrollment_termSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: retrieve_enrollment_termSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: retrieve_enrollment_termSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Retrieve enrollment term
 *
 * Retrieves the details for an enrollment term in the account. Includes
 * overrides by default.
 *
 * Nickname: retrieve_enrollment_term
 */
export async function retrieve_enrollment_term(options: Options) {
  const response = await client().fetchAs<EnrollmentTerm>(
    `/api/v1/accounts/{account_id}/terms/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
