import { TemporaryEnrollmentPairing } from '../../../../Resources/TemporaryEnrollmentPairings.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete Temporary Enrollment Pairing
 *
 * Delete a temporary enrollment pairing
 *
 * Nickname: delete_temporary_enrollment_pairing
 */
export async function delete_temporary_enrollment_pairing({
  parameters
}: Options): Promise<TemporaryEnrollmentPairing> {
  return await (
    await fetch(
      `/v1/accounts/{account_id}/temporary_enrollment_pairings/{id}`,
      { method: 'DELETE', body: parameters }
    )
  ).json();
}
