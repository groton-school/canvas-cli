import { client } from '../../../../Client.js';
import { TemporaryEnrollmentPairing } from '../../../../Resources/TemporaryEnrollmentPairings.js';

export type delete_temporary_enrollment_pairingPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_temporary_enrollment_pairingPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
