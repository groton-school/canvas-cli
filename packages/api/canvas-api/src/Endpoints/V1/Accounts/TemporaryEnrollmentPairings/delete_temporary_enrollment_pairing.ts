import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { TemporaryEnrollmentPairing } from '../../../../Resources/TemporaryEnrollmentPairings.js';

export type delete_temporary_enrollment_pairingPathParameters = {
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

export type delete_temporary_enrollment_pairingSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_temporary_enrollment_pairingPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_temporary_enrollment_pairingPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_temporary_enrollment_pairingSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_temporary_enrollment_pairingSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<delete_temporary_enrollment_pairingSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: delete_temporary_enrollment_pairingSearchParameters;
        strict: true;
      }
  );

/**
 * Delete Temporary Enrollment Pairing
 *
 * Delete a temporary enrollment pairing
 *
 * Nickname: delete_temporary_enrollment_pairing
 */
export async function delete_temporary_enrollment_pairing(options: Options) {
  const response = await client().fetchAs<TemporaryEnrollmentPairing>(
    `/api/v1/accounts/{account_id}/temporary_enrollment_pairings/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
