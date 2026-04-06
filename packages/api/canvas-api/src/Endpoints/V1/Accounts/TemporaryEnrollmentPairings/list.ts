import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { TemporaryEnrollmentPairing } from '../../../../Resources/TemporaryEnrollmentPairings.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

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
 * List temporary enrollment pairings
 *
 * Returns the list of temporary enrollment pairings for a root account.
 *
 * Nickname: list_temporary_enrollment_pairings
 */
export async function list(options: Options) {
  const response = await client().fetchAs<TemporaryEnrollmentPairing[]>(
    `/api/v1/accounts/{account_id}/temporary_enrollment_pairings`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
