import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { EnrollmentTerm } from '../../../../Resources/EnrollmentTerms.js';

export type delete_enrollment_termPathParameters = {
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

export type delete_enrollment_termSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_enrollment_termPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_enrollment_termPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_enrollment_termSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_enrollment_termSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_enrollment_termSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: delete_enrollment_termSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete enrollment term
 *
 * Delete the specified enrollment term.
 *
 * Nickname: delete_enrollment_term
 */
export async function delete_enrollment_term(options: Options) {
  const response = await client().fetchAs<EnrollmentTerm>(
    `/api/v1/accounts/{account_id}/terms/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
